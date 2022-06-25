import { lazy } from "react";
import { Navigate } from "react-router-dom";

import { PrivateLayout } from "~/components/layout/PrivateLayout";
import { FetchProvider } from "~/components/provider/Fetch";

const HomePage = lazy(() => import("~/components/page/private/home.page"));
const TimelinePage = lazy(() => import("~/components/page/private/timeline.page"));
const SearchPage = lazy(() => import("~/components/page/private/search.page"));
const SettingPage = lazy(() => import("~/components/page/private/setting.page"));
const AccountPage = lazy(() => import("~/components/page/private/account.page"));

export const privateRoutes = [
  {
    path: "",
    element: (
      <PrivateLayout>
        <FetchProvider />
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
