import "../styles/styles_modalcalendario.css";
import { TarjetaMostrarTareas } from "./TarjetaMostrarTareas";
import { fechaLarga } from "../utils/fechas.js";
import { useEffect } from "react";

export function ModalCalendario({
  setDiaSeleccionado,
  dia,
  tareasAMostrasModal,
  tareaHecha,
  eliminarTarea,
}) {
  const fecha = fechaLarga(dia);
  useEffect(() => {
    const tecla = (e) => {
      if (e.key === "Escape") {
        setDiaSeleccionado();
      }
    };
    window.addEventListener("keydown", tecla);

    return () => {
      window.removeEventListener("keydown", tecla);
    };
  }, [setDiaSeleccionado]);
  return (
    <div className="box-modal-calendario">
      <button type="button" onClick={() => setDiaSeleccionado()}>
        x
      </button>
      <h2>{fecha}</h2>
      {tareasAMostrasModal.length === 0 ? (
        <span className="sin-tareas">No hay tareas pendientes</span>
      ) : (
        tareasAMostrasModal.map((e) => (
          <TarjetaMostrarTareas
            key={e.id}
            id={e.id}
            titulo={e.titulo}
            fecha={e.fecha}
            prioridad={e.prioridad}
            descripcion={e.descripcion}
            hecha={e.hecha}
            tareaHecha={tareaHecha}
            eliminarTarea={eliminarTarea}
          />
        ))
      )}
    </div>
  );
}
