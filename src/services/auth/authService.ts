import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type {
  IAuthService,
  IGoogleSignInResponse,
  ISignInStatus,
  IUseSignOut,
} from "~/interfaces/service/IAuthService";
import { supabaseClient } from "~/libs/supabase/supabaseClient";

export const authService: IAuthService = {
  useAuth: (): ISignInStatus => {
    const [isSignIn, _setIsSignIn] = useState<boolean>(true);

    return { isSignIn };
  },
  googleSignIn: async (): Promise<IGoogleSignInResponse> => {
    return await supabaseClient.auth.signIn(
      { provider: "google" },
      { redirectTo: `${window.location.origin}/callback` },
    );
  },
  useSignOut: (): IUseSignOut => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
      await supabaseClient.auth.signOut();
      await navigate("/", { replace: true });
    };

    return { handleSignOut };
  },
};
