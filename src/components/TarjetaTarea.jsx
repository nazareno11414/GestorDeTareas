import "../styles/styles_tarjetatarea.css";
export function TarjetaTarea({ setEstadoNuevaTarea }) {
  const crearTarea = (e) => {
    e.preventDefault();
    alert("hola");
  };
  return (
    <div className="box-label-nueva-tarea">
      <form className="form-nueva-tarea" onSubmit={crearTarea}>
        <button
          className="btn-cerrar"
          onClick={() => setEstadoNuevaTarea(false)}
        >
          x
        </button>
        <label htmlFor="">Titulo</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Fecha</label>
        <input type="date" name="" id="" />
        <select className="tipo-prioridad" name="" id="">
          <option value="">Prioridad</option>
          <option value="alta">alta</option>
          <option value="media">media</option>
          <option value="baja">baja</option>
        </select>
        <label htmlFor="">Descripcion</label>
        <textarea name="" id=""></textarea>
        <button>Crear Tarea</button>
      </form>
    </div>
  );
}
