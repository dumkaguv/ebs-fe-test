import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
