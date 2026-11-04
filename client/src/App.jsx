import "./styles/styles_paneles.css";
import { Calendario } from "./components/Calendario";
import { PanelIzquierdo } from "./components/PanelIzquierdo.jsx";
import { PanelDerecho } from "./components/PanelDerecho.jsx";
import { dateATexto, grillaMes, nombreMes } from "./utils/fechas.js";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Historial } from "./components/Historial";
import { useTareas } from "./hooks/useTareas.js";
export function App() {
  const [abrirNuevaTarea, setAbrirNuevaTarea] = useState(false);
  const fecha = new Date();
  const fechaActualConvertida = dateATexto(fecha);
  const [contador, setContador] = useState(0);
  const arrayDias = grillaMes(fecha.getFullYear(), fecha.getMonth() + contador);
  const nombreMesActual = nombreMes(
    fecha.getFullYear(),
    fecha.getMonth() + contador,
  );
  const { tareas, agregarTarea, tareaHecha, eliminarTarea } = useTareas();
  return (
    <div className="box-paneles">
      <div className="box-izquierdo">
        <PanelIzquierdo
          abrirNuevaTarea={abrirNuevaTarea}
          setAbrirNuevaTarea={setAbrirNuevaTarea}
          agregarTarea={agregarTarea}
        />
      </div>

      <div className="box-medio">
        <Routes>
          <Route
            path="/"
            element={
              <Calendario
                tareasEjemplo={tareas}
                arrayDias={arrayDias}
                fechaActualConvertida={fechaActualConvertida}
                nombreMesActual={nombreMesActual}
                tareaHecha={tareaHecha}
                eliminarTarea={eliminarTarea}
                setContador={setContador}
                contador={contador}
              />
            }
          />
          <Route
            path="/historial"
            element={
              <Historial
                tareas={tareas}
                tareaHecha={tareaHecha}
                eliminarTarea={eliminarTarea}
                fechaActualConvertida={fechaActualConvertida}
              />
            }
          />
        </Routes>
      </div>
      <div className="box-derecho">
        <PanelDerecho
          tareasEjemplo={tareas}
          fechaActualConvertida={fechaActualConvertida}
          tareaHecha={tareaHecha}
        />
      </div>
    </div>
  );
}
