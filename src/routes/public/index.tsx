import { lazy } from "react";

import { PublicLayout } from "~/components/layout/PublicLayout";
import SignInPage from "~/components/page/public/sign-in.page";
import { FetchProvider } from "~/components/provider/Fetch";

const RegisterPage = lazy(() => import("~/components/page/public/register.page"));

export const publicRoutes = [
  {
    path: "",
    element: (
      <PublicLayout>
        <FetchProvider />
      </PublicLayout>
    ),
    children: [
      {
        path: "/",
        element: <SignInPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
];

/**
 *
 * 全ルーティング集約パターン
 * 可読性が低いので要検討
 *

export const publicRoutes = [
  {
    path: "",
    element: (
      <PublicLayout>
        <FetchProvider />
      </PublicLayout>
    ),
    children: [
      { path: "*", element: <NotFoundPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "posts", element: <PostListPage /> },
      { path: "posts/:postId", element: <PostDetailPage /> },
      {
        path: "nest-posts",
        element: <NestPostsPage />,
        children: [
          {
            path: "",
            element: <FetchProvider />,
            children: [
              {
                path: ":postId",
                element: <NestPostDetailPage />,
              },
            ],
          },
        ],
      },
      {
        path: "nest-one",
        element: <NestOnePage />,
        children: [
          {
            path: "",
            element: <FetchProvider />,
            children: [
              { path: "*", element: <NotFoundPage /> },
              { path: "about", element: <AboutPage /> },
              {
                path: "nest-two",
                element: <NestTwoPage />,
                children: [
                  {
                    path: "",
                    element: <FetchProvider />,
                    children: [
                      { path: "*", element: <NotFoundPage /> },
                      { path: "about", element: <AboutPage /> },
                      { path: "nest-three", element: <NestThreePage /> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

*/
