import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Discovery from "./pages/Discovery";
import Details from "./components/cardComponet/Details";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage></ErrorPage>,

    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Discovery />,
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: async ({ params }) => {
          const response = await fetch("/news.json");
          const data = await response.json();
          const item = data.find(item => item._id === params.id);
          return item || null;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
