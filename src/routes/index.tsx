import { useRoutes } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { session } from "~/libs/recoil/atom/session";
import { commonRoutes } from "~/routes/common";
import { privateRoutes } from "~/routes/private";
import { publicRoutes } from "~/routes/public";

export const AppRoutes = () => {
  const { user } = useRecoilValue(session);

  const routes = user ? privateRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
