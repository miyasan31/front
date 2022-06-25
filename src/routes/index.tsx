import type { FC, ReactNode } from "react";
import { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { session } from "~/libs/recoil/atom/session";
import { commonRoutes } from "~/routes/common";
import { privateRoutes } from "~/routes/private";
import { publicRoutes } from "~/routes/public";
import { authService } from "~/services/auth/authService";

export const AppRoutes = () => {
  const { user, isLoading } = useRecoilValue(session);

  const routes = useMemo(() => (user ? privateRoutes : publicRoutes), [user]);
  const element = useRoutes([...routes, ...commonRoutes]);

  return isLoading ? null : <>{element}</>;
};

type Props = {
  children: ReactNode;
};
const useAuth = authService.useAuth;
export const AuthProvider: FC<Props> = ({ children }) => {
  useAuth();
  return <>{children}</>;
};
