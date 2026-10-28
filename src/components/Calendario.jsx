import "../styles/styles_calendario.css";
import { dateATexto, grillaMes, nombreMes } from "../utils/fechas.js";
const fecha = new Date();
const fechaActualConvertida = dateATexto(fecha);
const arrayDias = grillaMes(fecha.getFullYear(), fecha.getMonth());
const nombreMesActual = nombreMes(fecha.getFullYear(), fecha.getMonth());
export function Calendario() {
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
            <span
              className={`dia-calendario${dia === "." ? " dia-vacio" : ""}${dia === fechaActualConvertida ? " dia-hoy" : ""}`}
              key={dia === "." ? `vacio-${indice}` : dia}
            >
              {dia === "." ? "" : Number(dia.slice(-2))}
            </span>
          ))}
        </div>
        <button className="btn-siguiente">siguiente</button>
        <button className="btn-anterior">anterior</button>
      </div>

      <div>
        <p>tareas de hoy</p>
      </div>
    </div>
  );
}
