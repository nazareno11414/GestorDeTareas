import "../styles/styles_modalcalendario.css";
import { TarjetaMostrarTareas } from "./TarjetaMostrarTareas";
export function ModalCalendario({
  setDiaSeleccionado,
  dia,
  tareasAMostrasModal,
  tareaHecha,
  eliminarTarea,
}) {
  return (
    <div className="box-modal-calendario">
      <button type="button" onClick={() => setDiaSeleccionado()}>
        x
      </button>
      <h2>{dia}</h2>
      {tareasAMostrasModal.map((e) => (
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
      ))}
    </div>
  );
}
