import "./styles/styles_paneles.css";
import { Calendario } from "./components/Calendario";
import { PanelIzquierdo } from "./components/PanelIzquierdo.jsx";
export function App() {
  return (
    <div className="box-paneles">
      <div className="box-izquierdo">
        <PanelIzquierdo />
      </div>
      <div className="box-medio">
        <Calendario />
      </div>
      <div className="box-derecho">derecha</div>
    </div>
  );
}
