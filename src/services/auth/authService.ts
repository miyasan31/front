import type { User as SessionUser } from "@supabase/supabase-js";
import { useCallback, useEffect } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import type { IAuthService } from "~/interfaces/service/IAuthService";
import { useCreateUserMutation, useGetUserByIdQuery } from "~/libs/graphql/service";
import { useGQLClient } from "~/libs/graphql-request/useGQLClient";
import { supabaseClient } from "~/libs/supabase/supabaseClient";
import { storeService } from "~/services/store/storeService";
import { sleep } from "~/utils/sleep";

const { useLoadingSetter } = storeService;
const { useSessionSelector, useSessionSetter } = storeService;

export const authService: IAuthService = {
  useAuth: () => {
    const session = useSessionSelector();
    const setSession = useSessionSetter();
    const setLoading = useLoadingSetter();

    const queryClient = useQueryClient();
    const { createPublicGQLClient } = useGQLClient();
    const { mutateAsync } = useCreateUserMutation(createPublicGQLClient());

    const userFetch = useCallback(async (userId: string) => {
      return await queryClient.fetchQuery(useGetUserByIdQuery.getKey({ userId }), () =>
        useGetUserByIdQuery
          .fetcher(createPublicGQLClient(), { userId })()
          .then((data) => data)
          .catch((error) => error),
      );
    }, []);

    const listenSession = useCallback(async () => {
      const res = supabaseClient.auth.session()?.user;
      if (!res) {
        setLoading(false);
        return null;
      }
      return res;
    }, []);

    const userRegisterdCheck = useCallback(async (sessionUser: SessionUser) => {
      const res = await userFetch(sessionUser.id);
      if (res.user) {
        setSession({
          id: res.user.id,
          name: res.user.name,
          avatar: res.user.avatar,
          profile: res.user.profile,
        });
        setLoading(false);
        return true;
      }
      return false;
    }, []);

    const userRegister = useCallback(async (sessionUser: SessionUser) => {
      const data = await mutateAsync({
        input: {
          id: sessionUser.id,
          name: sessionUser.user_metadata.full_name,
          avatar: sessionUser.user_metadata.avatar_url,
          email: sessionUser.user_metadata.email,
          profile: "プロフ初期値ダミーです",
        },
      });
      setSession({
        id: data.createUser.id,
        name: data.createUser.name,
        avatar: data.createUser.avatar,
        profile: data.createUser.profile,
      });
      setLoading(false);
    }, []);

    useEffect(() => {
      if (session.id) return;

      (async () => {
        await sleep(100);
        const sessionUser = await listenSession();
        if (!sessionUser) return;
        const isRegisterd = await userRegisterdCheck(sessionUser);
        if (isRegisterd) return;
        await userRegister(sessionUser);
      })();
    }, []);
  },
  googleSignIn: (): void => {
    supabaseClient.auth.signIn({ provider: "google" }, { redirectTo: `${window.location.origin}` });
  },
  useSignOut: () => {
    const navigate = useNavigate();
    const setSession = useSessionSetter();

    const handleSignOut = async () => {
      await supabaseClient.auth.signOut();
      setSession({
        id: null,
        name: null,
        avatar: null,
        profile: null,
      });
      navigate("/");
    };

    return { handleSignOut };
  },
};
