import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/app/index.css"; // global styles
import App from "@/app/App"; // main app component

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
