import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import type { IAuthService, IGoogleSignInResponse, ISession, IUseSignOut } from "~/interfaces/service/IAuthService";
import { session } from "~/libs/recoil/atom/session";
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
      isLoading && listenSession();
    }, [isLoading]);

    useEffect(() => {
      const { data: authListener } = supabaseClient.auth.onAuthStateChange(async (event, _session) => {
        if (event === "SIGNED_IN") {
          setSessionInfo((prev) => ({ ...prev, isLoading: true }));
        }
        if (event === "SIGNED_OUT") {
          setSessionInfo((prev) => ({ ...prev, isLoading: true }));
        }
      });

      return () => authListener?.unsubscribe();
    }, []);

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
