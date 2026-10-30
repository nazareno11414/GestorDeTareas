import "./styles/styles_paneles.css";
import { Calendario } from "./components/Calendario";
import { PanelIzquierdo } from "./components/PanelIzquierdo.jsx";
import { PanelDerecho } from "./components/PanelDerecho.jsx";
import { tareasEjemplo } from "./data/tareasEjemplo.js";
import { dateATexto, grillaMes, nombreMes } from "./utils/fechas.js";
import { useState } from "react";

export function App() {
  const [tareas, setTareas] = useState(tareasEjemplo);
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
  const arrayDias = grillaMes(fecha.getFullYear(), fecha.getMonth());
  const nombreMesActual = nombreMes(fecha.getFullYear(), fecha.getMonth());
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
        <Calendario
          tareasEjemplo={tareas}
          arrayDias={arrayDias}
          fechaActualConvertida={fechaActualConvertida}
          nombreMesActual={nombreMesActual}
          tareaHecha={tareaHecha}
          eliminarTarea={eliminarTarea}
        />
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
