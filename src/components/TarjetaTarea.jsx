import "../styles/styles_tarjetatarea.css";
import { useState } from "react";
export function TarjetaTarea({ setEstadoNuevaTarea, agregarTarea }) {
  const [tituloValue, setTituloValue] = useState("");
  const [fechaValue, setFechaValue] = useState("");
  const [prioridadValue, setPrioridadValue] = useState("");
  const [descrValue, setDescrValue] = useState("");

  const [error, setError] = useState("");
  const crearTarea = (e) => {
    e.preventDefault();
    setError("");
    if (tituloValue.trim().length === 0) {
      setError("Titulo vacio, por favor complete los campos");
      return;
    }
    if (fechaValue.trim().length === 0) {
      setError("Fecha incompleta, por favor complete los campos");
      return;
    }
    if (prioridadValue.trim().length === 0) {
      setError("Complete la prioridad, por favor complete los campos");
      return;
    }
    if (descrValue.trim().length === 0) {
      setError("Descripcion incompleta, por favor complete los campos");
      return;
    }
    const nuevaTarea = {
      id: crypto.randomUUID(),
      titulo: tituloValue,
      fecha: fechaValue,
      prioridad: prioridadValue,
      descripcion: descrValue,
      hecha: false,
    };

    agregarTarea(nuevaTarea);
  };

  return (
    <div className="box-label-nueva-tarea">
      <form className="form-nueva-tarea" onSubmit={crearTarea}>
        <button
          type="button"
          className="btn-cerrar"
          onClick={() => setEstadoNuevaTarea(false)}
        >
          x
        </button>
        <label htmlFor="titulo">Titulo</label>
        <input
          value={tituloValue}
          onChange={(e) => setTituloValue(e.target.value)}
          type="text"
          name=""
          id="titulo"
        />
        <label htmlFor="fecha">Fecha</label>
        <input
          value={fechaValue}
          onChange={(e) => setFechaValue(e.target.value)}
          type="date"
          name=""
          id="fecha"
        />
        <label htmlFor="prioridad">Establecer Prioridad</label>
        <select
          value={prioridadValue}
          onChange={(e) => setPrioridadValue(e.target.value)}
          className="tipo-prioridad"
          name=""
          id="prioridad"
        >
          <option value="">Prioridad</option>
          <option value="alta">alta</option>
          <option value="media">media</option>
          <option value="baja">baja</option>
        </select>
        <label htmlFor="desc">Descripcion</label>
        <textarea
          value={descrValue}
          onChange={(e) => setDescrValue(e.target.value)}
          name=""
          id="desc"
        ></textarea>
        <button>Crear Tarea</button>
        {error.length !== 0 && <p>{error}</p>}
      </form>
    </div>
  );
}
