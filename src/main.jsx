import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { dateATexto, grillaMes, nombreMes } from "./utils/fechas.js";
import { Calendario } from "./components/Calendario";
import { App } from "./App.jsx";

const fecha = new Date();
const fechaActualConvertida = dateATexto(fecha);
const arrayDias = grillaMes(fecha.getFullYear(), fecha.getMonth());
const nombreMesActual = nombreMes(fecha.getFullYear(), fecha.getMonth());
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
