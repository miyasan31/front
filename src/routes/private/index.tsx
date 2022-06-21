import { lazy } from "react";

import { PrivateLayout } from "~/components/layout/PrivateLayout";
import HomePage from "~/components/page/private/home.page";
import { FetchProvider } from "~/components/provider/Fetch";

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
