import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import Theme from "./utils/Theme";
import "./utils/Language";
import route from "./pages/route";

function App() {
  useEffect(() => {
    const theme = new Theme();
    theme.loadTheme();
  }, []);

  const router = createBrowserRouter(route());

  return <RouterProvider router={router} />;
}

export default App;
