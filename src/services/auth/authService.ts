import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import type { IAuthService, IGoogleSignInResponse, ISession, IUseSignOut } from "~/interfaces/service/IAuthService";
import { session } from "~/libs/recoil/session";
import { supabaseClient } from "~/libs/supabase/supabaseClient";

export const authService: IAuthService = {
  useAuth: (): ISession => {
    const navigate = useNavigate();
    const [{ isLoading, isSignIn }, setSessionInfo] = useRecoilState(session);

    const listenSession = useCallback(() => {
      const sessionUser = supabaseClient.auth.session()?.user;
      if (!sessionUser) {
        setSessionInfo({ isLoading: false, isSignIn: false });
        navigate("/");
        return;
      }

      // TODO:ユーザーが存在するかチェックする

      setSessionInfo({ isLoading: false, isSignIn: true });
    }, []);

    useEffect(() => {
      listenSession();

      const { data: authListener } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
        console.info(`event: ${event}`);
        console.info(`session uid: ${session?.user?.id}`);

        if (event === "SIGNED_IN") {
          setSessionInfo((prev) => ({ ...prev, isLoading: true }));
        }

        if (event === "SIGNED_OUT") {
          setSessionInfo((prev) => ({ ...prev, isLoading: true }));
        }
      });

      return () => {
        authListener?.unsubscribe();
      };
    }, [isLoading]);

    return { isLoading, isSignIn };
  },

  googleSignIn: async (): Promise<IGoogleSignInResponse> => {
    return await supabaseClient.auth.signIn({ provider: "google" }, { redirectTo: `${window.location.origin}` });
  },

  useSignOut: (): IUseSignOut => {
    const handleSignOut = async () => {
      await supabaseClient.auth.signOut();
    };

    return { handleSignOut };
  },
};
