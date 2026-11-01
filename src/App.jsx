import "./styles/styles_paneles.css";
import { Calendario } from "./components/Calendario";
import { PanelIzquierdo } from "./components/PanelIzquierdo.jsx";
import { PanelDerecho } from "./components/PanelDerecho.jsx";
import { tareasEjemplo } from "./data/tareasEjemplo.js";
import { dateATexto, grillaMes, nombreMes } from "./utils/fechas.js";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Historial } from "./components/Historial";

export function App() {
  const [tareas, setTareas] = useState(() => {
    const algoGuardado = localStorage.getItem("tareas");
    try {
      if (algoGuardado) {
        return JSON.parse(algoGuardado);
      } else {
        return tareasEjemplo;
      }
    } catch (error) {
      console.error("Error, problema con la carga de tareas");
      return tareasEjemplo;
    }
  });
  const [abrirNuevaTarea, setAbrirNuevaTarea] = useState(false);

  const agregarTarea = (tarea) => {
    const sumarTarea = [...tareas, tarea];
    setTareas(sumarTarea);
  };
  const tareaHecha = (id) => {
    const buscarTareaHecha = tareas.map((e) =>
      e.id === id ? { ...e, hecha: true } : { ...e },
    );
    setTareas(buscarTareaHecha);
  };
  const eliminarTarea = (id) => {
    const buscarTareaAEliminar = tareas.filter((e) =>
      e.id !== id ? { ...e } : false,
    );

    setTareas(buscarTareaAEliminar);
  };
  const fecha = new Date();
  const fechaActualConvertida = dateATexto(fecha);
  const [contador, setContador] = useState(0);
  const arrayDias = grillaMes(fecha.getFullYear(), fecha.getMonth() + contador);
  const nombreMesActual = nombreMes(
    fecha.getFullYear(),
    fecha.getMonth() + contador,
  );

  useEffect(() => {
    const tareasAGuardar = JSON.stringify(tareas);
    localStorage.setItem("tareas", tareasAGuardar);
  }, [tareas]);

  return (
    <div className="box-paneles">
      <div className="box-izquierdo">
        <PanelIzquierdo
          abrirNuevaTarea={abrirNuevaTarea}
          setAbrirNuevaTarea={setAbrirNuevaTarea}
          agregarTarea={agregarTarea}
          tareaHecha={tareaHecha}
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
        />
      </div>
    </div>
  );
}
