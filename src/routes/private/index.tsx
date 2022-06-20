import { lazy } from "react";

import { PrivateLayout } from "~/components/layout/PrivateLayout";
import MainPage from "~/components/page/private/main.page";
import { FetchProvider } from "~/components/provider/Fetch";
import { nestOneRoutes } from "~/routes/private/nest-one";
import { nestPostsRoutes } from "~/routes/private/nest-posts";

const AboutPage = lazy(() => import("~/components/page/public/about.page"));
const NestOnePage = lazy(() => import("~/components/page/public/nest-one.page"));
const NestPostsPage = lazy(() => import("~/components/page/public/nest-posts.page"));
const PostDetailPage = lazy(() => import("~/components/page/public/post-detail.page"));
const PostListPage = lazy(() => import("~/components/page/public/posts.page"));

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
        path: "main",
        element: <MainPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "posts",
        element: <PostListPage />,
      },
      {
        path: "posts/:postId",
        element: <PostDetailPage />,
      },
      {
        path: "nest-one",
        element: <NestOnePage />,
        children: [...nestOneRoutes],
      },
      {
        path: "nest-posts",
        element: <NestPostsPage />,
        children: [...nestPostsRoutes],
      },
    ],
  },
];
