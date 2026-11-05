import "../styles/styles_box_panel_izquierdo.css";
import logoGT from "../imgs/logoGT.png";
import { TarjetaTarea } from "./TarjetaTarea.jsx";
import { NavLink } from "react-router-dom";
export function PanelIzquierdo({
  abrirNuevaTarea,
  setAbrirNuevaTarea,
  agregarTarea,
  setLogueado,
  logueado,
}) {
  return (
    <div className="box-panel-izquierdo">
      <img src={logoGT} alt="logo del gestor" />
      <nav>
        <NavLink to="/" end>
          Hoy
        </NavLink>
        <NavLink to="/historial">Historial</NavLink>
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
      {logueado && (
        <button
          className="cerrar-sesion"
          onClick={() => setLogueado(!logueado)}
        >
          Cerrar sesion
        </button>
      )}
    </div>
  );
}
