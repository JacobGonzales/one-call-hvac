import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App";
import "@/styles/interactions.css";
import "@/styles/navigation.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("The root application element is missing.");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
