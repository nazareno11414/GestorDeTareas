import "../styles/style_historial.css";
import { TarjetaMostrarTareas } from "./TarjetaMostrarTareas.jsx";
export function Historial({
  tareas,
  tareaHecha,
  eliminarTarea,
  fechaActualConvertida,
}) {
  const tareasHistoria = tareas.filter((e) => e.fecha < fechaActualConvertida);
  const tareasOrdenadas = [...tareasHistoria].sort((a, b) => {
    return b.fecha.localeCompare(a.fecha);
  });
  console.log("supuestamenteordenadas", tareasOrdenadas);
  return (
    <div className="box-historial">
      <h2>Tareas</h2>
      {tareasOrdenadas.map((e) => (
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
