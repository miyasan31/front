import { atom } from "recoil";

import type { ISession } from "~/interfaces/service/IAuthService";

export const session = atom<ISession>({
  key: "session",
  default: {
    isLoading: true,
    isSignIn: false,
  },
});
