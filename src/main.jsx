import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout';
import Top from './components/top/Top';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>
  },
  {
    path: "/",
    element: <Top></Top>
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
