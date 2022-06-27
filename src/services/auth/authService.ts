import { useCallback, useEffect } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import type { IAuthService, IUseSignOut } from "~/interfaces/service/IAuthService";
import { useCreateUserMutation, useGetUserByIdQuery } from "~/libs/graphql/service";
import { useGQLClient } from "~/libs/graphql-request/useGQLClient";
import { session } from "~/libs/recoil/atom/session";
import { supabaseClient } from "~/libs/supabase/supabaseClient";

export const authService: IAuthService = {
  useAuth: () => {
    const queryClient = useQueryClient();
    const { createPublicGQLClient } = useGQLClient();
    const { mutateAsync } = useCreateUserMutation(createPublicGQLClient());
    const [{ isLoading, user }, setSessionInfo] = useRecoilState(session);

    const userFetch = useCallback(async (userId: string) => {
      return await queryClient.fetchQuery(useGetUserByIdQuery.getKey({ userId }), () =>
        useGetUserByIdQuery
          .fetcher(createPublicGQLClient(), { userId })()
          .catch((error) => error),
      );
    }, []);

    const listenSession = useCallback(async () => {
      if (!isLoading) return;
      if (user) return;

      const sessionUser = supabaseClient.auth.session()?.user;
      if (!sessionUser) {
        setSessionInfo((prev) => ({ ...prev, isLoading: false }));
        return;
      }

      const res = await userFetch(sessionUser.id);

      // TODO:バックエンドのエラーレスポンス改修検討
      if (res.user) {
        setSessionInfo({ isLoading: false, user: res.user });
        return;
      }

      const data = await mutateAsync({
        input: {
          id: sessionUser.id,
          name: sessionUser.user_metadata.full_name,
          avatar: sessionUser.user_metadata.avatar_url,
          email: sessionUser.user_metadata.email,
          profile: "プロフ初期値ダミーです",
        },
      });

      await setSessionInfo({
        isLoading: false,
        user: {
          id: data.createUser.id,
          name: data.createUser.name,
          avatar: data.createUser.avatar,
          profile: data.createUser.email,
        },
      });
    }, []);

    useEffect(() => {
      isLoading && listenSession();

      const { data: authListener } = supabaseClient.auth.onAuthStateChange(async (event, _session) => {
        if (event === "SIGNED_IN") {
          listenSession();
          // setSessionInfo((prev) => ({ ...prev, isLoading: true }));
        }
        if (event === "SIGNED_OUT") {
          // setSessionInfo({ isLoading: true, user: null });
        }
      });

      return () => authListener?.unsubscribe();
    }, [isLoading]);
  },
  googleSignIn: (): void => {
    supabaseClient.auth.signIn({ provider: "google" }, { redirectTo: `${window.location.origin}` });
  },
  useSignOut: (): IUseSignOut => {
    const navigate = useNavigate();
    const setSessionInfo = useSetRecoilState(session);

    const handleSignOut = async () => {
      await supabaseClient.auth.signOut();
      setSessionInfo({ isLoading: true, user: null });
      navigate("/");
    };

    return { handleSignOut };
  },
};
