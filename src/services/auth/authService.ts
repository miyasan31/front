import { useState } from "react";

import type { IAuthService, ISignInStatus } from "~/interfaces/service/IAuthService";

export const authService: IAuthService = {
  useAuth: (): ISignInStatus => {
    const [isSignIn, _setIsSignIn] = useState<boolean>(true);

    return { isSignIn };
  },
};
