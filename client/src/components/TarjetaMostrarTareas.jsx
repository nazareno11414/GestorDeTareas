import "../styles/styles_box_tarjeta_hoy.css";
import { Fragment } from "react";
export function TarjetaMostrarTareas({
  id,
  titulo,
  fecha,
  prioridad,
  descripcion,
  hecha,
  tareaHecha,
  eliminarTarea,
}) {
  const realizada = hecha ? "Realizada" : "Falta realizar";

  return (
    <div className="box-tarjeta-hoy">
      {id !== undefined && !hecha && (
        <Fragment>
          <button
            className="tarea-hecha"
            type="button"
            onClick={() => tareaHecha(id)}
          >
            Realizar
          </button>

          <button
            className="tarea-eliminada"
            type="button"
            onClick={() => eliminarTarea(id)}
          >
            Eliminar
          </button>
        </Fragment>
      )}

      <h5>{titulo}</h5>
      <p>
        {prioridad} - {fecha} - {realizada}
      </p>
      <p>{descripcion}</p>
      {hecha && (
        <button
          type="button "
          className="deshacer-tarea"
          onClick={() => tareaHecha(id)}
        >
          Deshacer
        </button>
      )}
    </div>
  );
}
