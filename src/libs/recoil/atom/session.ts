import { atom } from "recoil";

import type { IUser } from "~/interfaces/model/IUser";

type ISession = {
  isLoading: boolean;
  user: Pick<IUser, "id" | "name" | "avatar" | "profile"> | null;
};

export const session = atom<ISession>({
  key: "session",
  default: {
    isLoading: true,
    user: null,
  },
});
