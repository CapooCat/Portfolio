import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Loading from "./components/UI/Loading";
import Theme from "./utils/Theme";
import "./utils/Language";

const ErrorBoundary = () => {
  const error = useRouteError();
};

function App() {
  useEffect(() => {
    const theme = new Theme();
    theme.loadTheme();
  }, []);

  const Home = lazy(() => import("./pages/Home/Index"));
  const NotFound = lazy(() => import("./pages/NotFound/Index"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      ),
      errorElement: (
        <Suspense fallback={<Loading />}>
          <ErrorBoundary />
        </Suspense>
      ),
    },

    {
      path: "*",
      element: (
        <Suspense fallback={<Loading />}>
          <NotFound />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
