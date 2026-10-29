import "../styles/styles_box_tarjeta_hoy.css";
export function TarjetaMostrarTareas({
  titulo,
  fecha,
  prioridad,
  descripcion,
  hecha,
}) {
  const realizada = hecha ? "Realizada" : "Falta realizar";
  return (
    <div className="box-tarjeta-hoy">
      <h5>{titulo}</h5>
      <p>
        {prioridad} - {fecha} - {realizada}
      </p>
      <p>{descripcion}</p>
    </div>
  );
}
