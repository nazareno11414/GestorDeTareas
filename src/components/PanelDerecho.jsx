import "../styles/style_box_panel_derecho.css";
import { TarjetaMostrarTareas } from "./TarjetaMostrarTareas.jsx";
import { orden } from "../utils/constantes.js";
export function PanelDerecho({ tareasEjemplo, fechaActualConvertida }) {
  const arrayTareasHoyHechas = tareasEjemplo.filter(
    (e) => e.fecha === fechaActualConvertida && e.hecha === true,
  );
  const arrayTareasProximas = tareasEjemplo.filter(
    (e) => fechaActualConvertida < e.fecha && e.hecha === false,
  );

  const arrayTareasProximasPorPrioridad = [...arrayTareasProximas].sort(
    (a, b) => {
      return orden[b.prioridad] - orden[a.prioridad];
    },
  );
  return (
    <div className="box-derecho">
      <h3>Tareas Realizadas</h3>
      <div>
        {arrayTareasHoyHechas.slice(0, 3).map((e) => (
          <TarjetaMostrarTareas
            key={e.id}
            titulo={e.titulo}
            fecha={e.fecha}
            prioridad={e.prioridad}
            descripcion={e.descripcion}
            hecha={e.hecha}
          />
        ))}
      </div>

      <div>
        <h3>Proximos dias</h3>
        {arrayTareasProximasPorPrioridad.slice(0, 3).map((e) => (
          <TarjetaMostrarTareas
            key={e.id}
            titulo={e.titulo}
            fecha={e.fecha}
            prioridad={e.prioridad}
            descripcion={e.descripcion}
            hecha={e.hecha}
          />
        ))}
      </div>
    </div>
  );
}
