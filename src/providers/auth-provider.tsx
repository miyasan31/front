import type { FC, ReactNode } from "react";
import { useRecoilValue } from "recoil";

import { Indicator } from "~/components/shared/Indicator";
import { loading } from "~/libs/recoil/atom/loading";
import { authService } from "~/services/auth/authService";

const { useAuth } = authService;

type Props = {
  children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  useAuth();
  const { isLoading } = useRecoilValue(loading);

  return isLoading ? <Indicator message="認証処理中..." /> : <>{children}</>;
};
