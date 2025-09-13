import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavContextProvider } from "./context/NavContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavContextProvider>
      <App />
    </NavContextProvider>
  </StrictMode>
);
