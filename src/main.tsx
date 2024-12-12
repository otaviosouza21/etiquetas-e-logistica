import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStorage } from "./context/GlobalContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStorage>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStorage>
  </StrictMode>
);
