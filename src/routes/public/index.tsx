import { lazy } from "react";

import { PublicLayout } from "~/components/layout/PublicLayout";
import { Outlet } from "~/components/lib/Outlet";
import { Suspense } from "~/components/provider/Suspense";

const SignInPage = lazy(() => import("~/components/page/public/sign-in"));

export const publicRoutes = [
  {
    path: "",
    element: (
      <PublicLayout>
        <Suspense>
          <Outlet />
        </Suspense>
      </PublicLayout>
    ),
    children: [
      {
        path: "/",
        element: <SignInPage />,
      },
    ],
  },
];
