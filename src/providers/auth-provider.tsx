import type { FC, ReactNode } from "react";

import { Indicator } from "~/components/shared/Indicator";
import { authService } from "~/services/auth/authService";
import { storeService } from "~/services/store/storeService";

const { useLoadingSelector } = storeService;
const { useAuth } = authService;

type Props = {
  children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  useAuth();
  const isLoading = useLoadingSelector();

  return isLoading ? <Indicator message="認証処理中..." /> : <>{children}</>;
};
