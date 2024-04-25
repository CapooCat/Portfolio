import { lazy, Suspense } from "react";
import Loading from "../components/UI/Loading";
import { useRouteError } from "react-router-dom";

export default function routeConfig() {
  const Home = lazy(() => import("./Home/Index"));
  const Resources = lazy(() => import("./Resources/Index"));
  const NotFound = lazy(() => import("./NotFound/Index"));
  const Gallery = lazy(() => import("./Gallery/Index"));

  const ErrorBoundary = () => {
    const error = useRouteError();
  };

  const initial = () => {
    return {
      errorElement: (
        <Suspense fallback={<Loading />}>
          <ErrorBoundary />
        </Suspense>
      ),
    };
  };

  return [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      ),
      ...initial,
    },

    {
      path: "/Resources",
      element: (
        <Suspense fallback={<Loading />}>
          <Resources />
        </Suspense>
      ),
      ...initial,
    },

    {
      path: "/Gallery",
      element: (
        <Suspense fallback={<Loading />}>
          <Gallery />
        </Suspense>
      ),
      ...initial,
    },

    {
      path: "*",
      element: (
        <Suspense fallback={<Loading />}>
          <NotFound />
        </Suspense>
      ),
    },
  ];
}
