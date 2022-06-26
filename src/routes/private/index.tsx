import { lazy } from "react";
import { Navigate } from "react-router-dom";

import { PrivateLayout } from "~/components/layout/PrivateLayout";
import { Outlet } from "~/components/lib/Outlet";
import { Suspense } from "~/components/provider/Suspense";

const HomePage = lazy(() => import("~/components/page/private/home"));
const TimelinePage = lazy(() => import("~/components/page/private/timeline"));
const SearchPage = lazy(() => import("~/components/page/private/search"));
const AccountPage = lazy(() => import("~/components/page/private/account"));
const SettingPage = lazy(() => import("~/components/page/private/setting"));

export const privateRoutes = [
  {
    path: "",
    element: (
      <PrivateLayout>
        <Suspense>
          <Outlet />
        </Suspense>
      </PrivateLayout>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        index: true,
        path: "/hoge",
        element: <Navigate to="/timeline" replace={true} />,
      },
      {
        path: "timeline",
        element: <TimelinePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "setting",
        element: <SettingPage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
    ],
  },
];
