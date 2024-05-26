import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";

// eslint-disable-next-line react-refresh/only-export-components
const LazyMainPage = lazy(() => import("./pages/MainPage"));
// eslint-disable-next-line react-refresh/only-export-components
const LazyErrorPage = lazy(() => import("./pages/ErrorPage"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LazyMainPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense>
        <LazyErrorPage />
      </Suspense>
    ),
  },
];

export default routes;
