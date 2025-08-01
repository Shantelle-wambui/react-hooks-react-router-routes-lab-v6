import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
