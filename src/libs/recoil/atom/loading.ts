import { atom } from "recoil";

import type { ILoading } from "~/interfaces/store/ILoading";

export const loading = atom<ILoading>({
  key: "loading",
  default: {
    isLoading: true,
  },
});
