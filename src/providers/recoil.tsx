import type { FC, ReactNode } from "react";
import { RecoilRoot } from "recoil";

type Props = {
  children: ReactNode;
};

export const RecoilProvider: FC<Props> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
