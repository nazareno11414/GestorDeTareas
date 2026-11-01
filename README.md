# Gestor de Tareas

Gestor de tareas con calendario e historial, hecho con **React + Vite** como proyecto de práctica.
La idea es mantenerlo simple: crear tareas, verlas en un calendario mensual, completarlas, eliminarlas y consultar las anteriores.

> **Estado:** en desarrollo. El front funciona de punta a punta con datos locales; el backend con Node todavía no está empezado.

## Qué se puede hacer hoy

- **Calendario mensual** con la semana empezando en lunes, el día de hoy resaltado y navegación entre meses (anterior / siguiente, también al cruzar de año).
- **Marca en los días que tienen tareas.**
- **Modal por día:** al hacer clic en un día se abren sus tareas, que se pueden completar o eliminar desde ahí.
- **Crear tareas** con título, fecha, prioridad (alta / media / baja) y descripción, con validación de campos.
- **Tareas de hoy** ordenadas por prioridad.
- **Panel lateral derecho** con las tareas realizadas hoy y un resumen de los próximos días.
- **Historial** de tareas con fecha anterior a hoy, de la más reciente a la más antigua (ruta `/historial`).
- **Persistencia en `localStorage`:** las tareas se guardan solas y sobreviven a recargar la página. Si el dato guardado está corrupto, la app arranca con las tareas de ejemplo en lugar de romperse.

## Cómo está armado

```
src/
├── components/          # piezas de la interfaz
│   ├── Calendario.jsx       grilla del mes + tareas de hoy
│   ├── ModalCalendario.jsx  tareas del día elegido
│   ├── PanelIzquierdo.jsx   logo, navegación y botón "Nueva tarea"
│   ├── PanelDerecho.jsx     realizadas hoy y próximos días
│   ├── Historial.jsx        tareas anteriores a hoy
│   ├── TarjetaTarea.jsx     formulario de nueva tarea
│   └── TarjetaMostrarTareas.jsx   tarjeta de una tarea
├── utils/
│   ├── fechas.js            grillaMes, nombreMes, dateATexto
│   └── constantes.js        orden de las prioridades
├── data/
│   └── tareasEjemplo.js     tareas de partida
├── styles/              # un CSS por componente
├── App.jsx              # estado de las tareas y rutas
└── main.jsx
```

**Cómo fluyen los datos:** el estado de las tareas vive en `App.jsx`, junto con las funciones que lo modifican (`agregarTarea`, `tareaHecha`, `eliminarTarea`). Esas funciones bajan por props hasta las tarjetas, que solo avisan *qué* tarea cambió. Los componentes no guardan copias de las tareas: las calculan en cada render a partir de la lista de `App`.

**Forma de una tarea:**

```js
{
  id: "uuid",
  titulo: "Preparar presentación",
  fecha: "2026-11-05",      // siempre YYYY-MM-DD
  prioridad: "alta",        // alta | media | baja
  descripcion: "…",
  hecha: false,
}
```

## Tecnologías

- React 19
- Vite
- React Router (`react-router-dom`)
- ESLint
- CSS propio, sin librerías de estilos

## Cómo correrlo

Requiere [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/nazareno11414/GestorDeTareas.git
cd GestorDeTareas
npm install
npm run dev
```

Se abre en `http://localhost:5173`.

Otros comandos:

```bash
npm run build     # versión de producción
npm run lint      # revisar el código con ESLint
```

## Lo que viene

- [ ] Poder deshacer una tarea completada (hoy solo se marca como hecha).
- [ ] Cerrar el modal con Escape o haciendo clic afuera.
- [ ] Marcar en el menú lateral la sección activa (`NavLink`).
- [ ] Scroll interno en las listas largas.
- [ ] Historial real: registro de acciones (creada, completada, eliminada) con fecha y hora.
- [ ] Editar una tarea.
- [ ] Mover el estado a un hook propio (`useTareas`).
- [ ] **Backend con Node + Express y base de datos (SQLite)**, reemplazando `localStorage`.
- [ ] Pulido visual final.

## Notas

Es un proyecto de aprendizaje: la lógica de fechas (`utils/fechas.js`) está escrita a mano, sin librerías, a propósito.
