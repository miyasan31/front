import { atom } from "recoil";

import type { ISession } from "~/interfaces/store/ISession";

export const session = atom<ISession>({
  key: "session",
  default: {
    id: null,
    name: null,
    avatar: null,
    profile: null,
  },
});
