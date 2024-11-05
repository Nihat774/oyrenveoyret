import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import PageTransition from "./Components/animations/PageTransition/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <PageTransition>
      <StrictMode>
        <App />
      </StrictMode>
  </PageTransition>
    </BrowserRouter>
);