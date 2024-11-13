import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStorage } from "./context/GlobalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStorage>
      <App />
    </GlobalStorage>
  </StrictMode>
);
