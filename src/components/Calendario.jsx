import "../styles/styles_calendario.css";
import { dateATexto, grillaMes, nombreMes } from "../utils/fechas.js";
import { TarjetaMostrarTareas } from "./TarjetaMostrarTareas.jsx";

const fecha = new Date();
const fechaActualConvertida = dateATexto(fecha);
const arrayDias = grillaMes(fecha.getFullYear(), fecha.getMonth());
const nombreMesActual = nombreMes(fecha.getFullYear(), fecha.getMonth());
const tareasEjemplo = [
  {
    id: 8,
    titulo: "Preparar cafe",
    fecha: "2026-10-28",
    prioridad: "baja",
    descripcion: "calentar el agua.",
    hecha: false,
  },
  {
    id: 1,
    titulo: "Preparar presentación",
    fecha: "2026-10-28",
    prioridad: "alta",
    descripcion: "Armar las diapositivas y ensayar la exposición.",
    hecha: false,
  },
  {
    id: 2,
    titulo: "Llamar al dentista",
    fecha: "2026-10-28",
    prioridad: "media",
    descripcion: "Pedir turno para la limpieza.",
    hecha: true,
  },
  {
    id: 3,
    titulo: "Comprar regalo de cumpleaños",
    fecha: "2026-10-30",
    prioridad: "baja",
    descripcion: "",
    hecha: false,
  },
  {
    id: 4,
    titulo: "Revisar presupuesto del mes",
    fecha: "2026-11-02",
    prioridad: "alta",
    descripcion: "Comparar gastos con lo planificado y ajustar categorías.",
    hecha: false,
  },
  {
    id: 5,
    titulo: "Estudiar React",
    fecha: "2026-10-25",
    prioridad: "media",
    descripcion: "Repasar props y useState.",
    hecha: true,
  },
  {
    id: 6,
    titulo: "Entregar informe",
    fecha: "2026-10-26",
    prioridad: "alta",
    descripcion: "Venció y todavía no se entregó.",
    hecha: false,
  },
  {
    id: 7,
    titulo: "Hacer las compras",
    fecha: "2026-11-05",
    prioridad: "baja",
    descripcion: "Verdulería y supermercado.",
    hecha: false,
  },
];
const tareasAMostras = tareasEjemplo.filter(
  (e) => e.hecha === false && e.fecha === fechaActualConvertida,
);
const orden = {
  alta: 3,
  media: 2,
  baja: 1,
};

const tareasOrdenadasPorPrioridad = [...tareasAMostras].sort((a, b) => {
  return orden[b.prioridad] - orden[a.prioridad];
});

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
        <h4>tareas de hoy</h4>
        <div>
          {tareasOrdenadasPorPrioridad.map((e) => (
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
    </div>
  );
}
