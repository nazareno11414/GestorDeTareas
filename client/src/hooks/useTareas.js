import { useState, useEffect } from "react";

export function useTareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tareas")
      .then((respuesta) => respuesta.json())
      .then((datos) => setTareas(datos));
  }, []);

  const agregarTarea = (tarea) => {
    fetch("http://localhost:3000/tareas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tarea),
    })
      .then((respuesta) => respuesta.json())
      .then((nueva) => setTareas([...tareas, nueva]));
  };

  const tareaHecha = (id) => {
    const tarea = tareas.find((e) => e.id === id);
    fetch(`http://localhost:3000/tareas/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hecha: !tarea.hecha }),
    })
      .then((respuesta) => respuesta.json())
      .then((actualizada) =>
        setTareas(tareas.map((e) => (e.id === id ? actualizada : e))),
      );
  };

  const eliminarTarea = (id) => {
    fetch(`http://localhost:3000/tareas/${id}`, {
      method: "DELETE",
    }).then(() => setTareas(tareas.filter((e) => e.id !== id)));
  };

  return { tareas, agregarTarea, tareaHecha, eliminarTarea };
}
