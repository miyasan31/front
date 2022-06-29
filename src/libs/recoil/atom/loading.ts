import { atom } from "recoil";

export const loading = atom<{ isLoading: boolean }>({
  key: "loading",
  default: {
    isLoading: true,
  },
});
