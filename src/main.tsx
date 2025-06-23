import "./index.css";

import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";

import App from "./App.tsx";
import { DashboardPage } from "./pages/dashboard/index.tsx";
import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";

const route = (
  navigator.userAgent.toLowerCase().includes("electron")
    ? createHashRouter
    : createBrowserRouter
)([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
    <ToastContainer />
  </StrictMode>
);
