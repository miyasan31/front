import { useRoutes } from "react-router-dom";

import { commonRoutes } from "~/routes/common";
import { privateRoutes } from "~/routes/private";
import { publicRoutes } from "~/routes/public";
import { storeService } from "~/services/store/storeService";

const { useSessionSelector } = storeService;

export const AppRoutes = () => {
  const session = useSessionSelector();

  const routes = session.id ? privateRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
