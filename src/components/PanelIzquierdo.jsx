import "../styles/styles_box_panel_izquierdo.css";
import logoGT from "../imgs/logoGT.png";
import { TarjetaTarea } from "./TarjetaTarea.jsx";

export function PanelIzquierdo({
  abrirNuevaTarea,
  setAbrirNuevaTarea,
  agregarTarea,
}) {
  return (
    <div className="box-panel-izquierdo">
      <img src={logoGT} alt="logo del gestor" />
      <nav>
        <button type="button">Hoy</button>
        <button type="button">Historial</button>
        <button type="button">Calendario</button>
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
