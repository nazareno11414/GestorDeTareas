import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { dateATexto, grillaMes, nombreMes } from "./utils/fechas.js";
import { Calendario } from "./components/Calendario";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
