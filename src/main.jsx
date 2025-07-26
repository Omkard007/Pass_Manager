// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Password from "@/components/password"; // Adjust the path if needed
import "./index.css"; // your global styles

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/password",
    element: <Password />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
