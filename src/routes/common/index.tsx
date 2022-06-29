import { lazy } from "react";

const NotFoundPage = lazy(() => import("~/components/page/common/404"));
const CallbackPage = lazy(() => import("~/components/page/public/callback"));

export const commonRoutes = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/callback",
    element: <CallbackPage />,
  },
];
