import { useRoutes } from "react-router-dom";

import { commonRoutes } from "~/routes/common";
import { privateRoutes } from "~/routes/private";
import { publicRoutes } from "~/routes/public";
import { authService } from "~/services/auth/authService";

const useAuth = authService.useAuth;

export const AppRoutes = () => {
  const { isSignIn } = useAuth();

  const routes = isSignIn ? privateRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
