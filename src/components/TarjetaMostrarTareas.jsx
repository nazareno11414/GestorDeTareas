import "../styles/styles_box_tarjeta_hoy.css";
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
      {id !== undefined && (
        <button
          className="tarea-hecha"
          type="button"
          onClick={() => tareaHecha(id)}
        >
          Realizar
        </button>
      )}
      {id !== undefined && (
        <button
          className="tarea-eliminada"
          type="button"
          onClick={() => eliminarTarea(id)}
        >
          Eliminar
        </button>
      )}
      <h5>{titulo}</h5>
      <p>
        {prioridad} - {fecha} - {realizada}
      </p>
      <p>{descripcion}</p>
    </div>
  );
}
