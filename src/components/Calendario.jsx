import "../styles/styles_calendario.css";
import { TarjetaMostrarTareas } from "./TarjetaMostrarTareas.jsx";
import { useState } from "react";
import { ModalCalendario } from "./ModalCalendario.jsx";
import { orden } from "../utils/constantes.js";
export function Calendario({
  tareasEjemplo,
  fechaActualConvertida,
  arrayDias,
  nombreMesActual,
  tareaHecha,
  eliminarTarea,
  setContador,
  contador,
}) {
  const tareasAMostras = tareasEjemplo.filter(
    (e) => e.hecha === false && e.fecha === fechaActualConvertida,
  );
  const [diaseSeleccionado, setDiaSeleccionado] = useState();
  const tareasAMostrasModal = tareasEjemplo.filter(
    (e) => e.fecha === diaseSeleccionado,
  );

  const tareasOrdenadasPorPrioridad = [...tareasAMostras].sort((a, b) => {
    return orden[b.prioridad] - orden[a.prioridad];
  });
  return (
    <div>
      <div className="box-calendario">
        <h2>{nombreMesActual}</h2>

        <div className="dias-calendario">
          {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((dia) => (
            <span className="nombre-dia" key={dia}>
              {dia}
            </span>
          ))}
          {arrayDias.map((dia, indice) => (
            <button
              onClick={() => (dia !== "." ? setDiaSeleccionado(dia) : false)}
              className={`dia-calendario${dia === "." ? " dia-vacio" : ""}${dia === fechaActualConvertida ? " dia-hoy" : ""}`}
              key={dia === "." ? `vacio-${indice}` : dia}
            >
              {dia === "." ? "" : Number(dia.slice(-2))}

              {tareasEjemplo.some((e) => e.fecha === dia) && (
                <span className="punto-tareas">*</span>
              )}
            </button>
          ))}
        </div>
        {diaseSeleccionado && (
          <ModalCalendario
            setDiaSeleccionado={setDiaSeleccionado}
            dia={diaseSeleccionado}
            tareasAMostrasModal={tareasAMostrasModal}
            tareaHecha={tareaHecha}
            eliminarTarea={eliminarTarea}
          />
        )}
        <button
          className="btn-anterior"
          type="button"
          onClick={() => setContador(contador - 1)}
        >
          anterior
        </button>
        <button
          className="btn-siguiente"
          type="button"
          onClick={() => setContador(contador + 1)}
        >
          siguiente
        </button>
      </div>

      <div>
        <h4>tareas de hoy</h4>
        <div>
          {tareasOrdenadasPorPrioridad.slice(0, 3).map((e) => (
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
      </div>
    </div>
  );
}
