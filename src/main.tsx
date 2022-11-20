import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { worker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
  worker.start().catch((e) => console.log(e));
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
