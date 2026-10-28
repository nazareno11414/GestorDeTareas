import "../styles/styles_box_panel_izquierdo.css";
import logoGT from "../imgs/logoGT.png";
import { TarjetaTarea } from "./TarjetaTarea.jsx";
import { useState } from "react";
export function PanelIzquierdo() {
  const [EstadoNuevaTarea, setEstadoNuevaTarea] = useState(false);

  return (
    <div className="box-panel-izquierdo">
      <img src={logoGT} alt="logo del gestor" />
      <nav>
        <a href="">Hoy</a>
        <a href="">Historial</a>
        <a href="">Calendario</a>
        <a href="">Historial</a>
        <a href="">Pendientes</a>
        <a href="">Completadas</a>
        <a href="">Vencidas</a>
        <a href="">Próximos días</a>
      </nav>

      <button onClick={() => setEstadoNuevaTarea(!EstadoNuevaTarea)}>
        Nueva tarea +
      </button>
      {EstadoNuevaTarea && (
        <TarjetaTarea setEstadoNuevaTarea={setEstadoNuevaTarea} />
      )}
    </div>
  );
}
