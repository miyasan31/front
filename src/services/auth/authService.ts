import { useCallback, useEffect } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import type { IAuthService, IGoogleSignInResponse, IUseSignOut } from "~/interfaces/service/IAuthService";
import { useGetUserByIdQuery } from "~/libs/graphql/service";
import { session } from "~/libs/recoil/atom/session";
import { supabaseClient } from "~/libs/supabase/supabaseClient";
import { userService } from "~/services/user/userService";

const userCreate = userService.create;

export const authService: IAuthService = {
  useAuth: () => {
    const queryClient = useQueryClient();
    const { mutateAsync } = userCreate();
    const [{ isLoading, user }, setSessionInfo] = useRecoilState(session);

    const userFetch = useCallback(async (userId: string) => {
      return await queryClient.fetchQuery(useGetUserByIdQuery.getKey({ userId }), () =>
        useGetUserByIdQuery
          .fetcher({ userId })()
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
      if (res.message === "Not Found") {
        const data = await mutateAsync({
          input: {
            id: sessionUser.id,
            name: sessionUser.user_metadata.full_name,
            avatar: sessionUser.user_metadata.avatar_url,
            email: sessionUser.user_metadata.email,
            profile: "プロフ初期値",
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
        return;
      }

      setSessionInfo({ isLoading: false, user: res.user });
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
  googleSignIn: async (): Promise<IGoogleSignInResponse> => {
    return await supabaseClient.auth.signIn({ provider: "google" }, { redirectTo: `${window.location.origin}` });
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
