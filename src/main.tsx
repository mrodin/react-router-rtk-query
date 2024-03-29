import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./app/home/Home";
import { Page } from "./app/page/Page";
import { worker } from "./mocks/browser";
import { store } from "./store";

import "./index.css";

if (process.env.NODE_ENV === "development") {
  worker.start().catch((e) => console.log(e));
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page",
    element: <Page />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
