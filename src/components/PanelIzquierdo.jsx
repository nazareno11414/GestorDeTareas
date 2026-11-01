import "../styles/styles_box_panel_izquierdo.css";
import logoGT from "../imgs/logoGT.png";
import { TarjetaTarea } from "./TarjetaTarea.jsx";
import { Link } from "react-router-dom";
export function PanelIzquierdo({
  abrirNuevaTarea,
  setAbrirNuevaTarea,
  agregarTarea,
}) {
  return (
    <div className="box-panel-izquierdo">
      <img src={logoGT} alt="logo del gestor" />
      <nav>
        <Link to="/">Hoy</Link>
        <Link to="/historial">Historial</Link>
      </nav>

      <button onClick={() => setAbrirNuevaTarea(!abrirNuevaTarea)}>
        Nueva tarea +
      </button>
      {abrirNuevaTarea && (
        <TarjetaTarea
          setEstadoNuevaTarea={setAbrirNuevaTarea}
          agregarTarea={agregarTarea}
        />
      )}
    </div>
  );
}
