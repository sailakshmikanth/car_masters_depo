import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// Import createRoot from react-dom/client
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
