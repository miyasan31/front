import type { User as SessionUser } from "@supabase/supabase-js";
import { useCallback, useEffect } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import type { IAuthService, IUseSignOut } from "~/interfaces/service/IAuthService";
import { useCreateUserMutation, useGetUserByIdQuery } from "~/libs/graphql/service";
import { useGQLClient } from "~/libs/graphql-request/useGQLClient";
import { loading } from "~/libs/recoil/atom/loading";
import { session } from "~/libs/recoil/atom/session";
import { supabaseClient } from "~/libs/supabase/supabaseClient";
import { sleep } from "~/utils/sleep";

export const authService: IAuthService = {
  useAuth: () => {
    const queryClient = useQueryClient();
    const { createPublicGQLClient } = useGQLClient();
    const { mutateAsync } = useCreateUserMutation(createPublicGQLClient());
    const [{ isLoading: _ }, setIsLoading] = useRecoilState(loading);
    const [{ user }, setSessionInfo] = useRecoilState(session);

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
        setIsLoading({ isLoading: false });
        return null;
      }
      return res;
    }, []);

    const userRegisterdCheck = useCallback(async (sessionUser: SessionUser) => {
      const res = await userFetch(sessionUser.id);
      if (res.user) {
        setSessionInfo({ user: res.user });
        setIsLoading({ isLoading: false });
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
      setSessionInfo({ user: data.createUser });
      setIsLoading({ isLoading: false });
    }, []);

    useEffect(() => {
      if (user) return;

      (async () => {
        await sleep(600);
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
  useSignOut: (): IUseSignOut => {
    const navigate = useNavigate();
    const setSessionInfo = useSetRecoilState(session);

    const handleSignOut = async () => {
      await supabaseClient.auth.signOut();
      setSessionInfo({ user: null });
      navigate("/");
    };

    return { handleSignOut };
  },
};
