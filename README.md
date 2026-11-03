# Gestor de Tareas

Gestor de tareas con calendario e historial, hecho con **React + Vite** en el front y **Node + Express + Supabase** en el back, como proyecto de práctica.
La idea es mantenerlo simple: crear tareas, verlas en un calendario mensual, completarlas, deshacerlas, eliminarlas y consultar las anteriores.

> **Estado:** en desarrollo. El front ya está conectado de punta a punta con el servidor: las tareas se guardan en una base de datos de Supabase y sobreviven a recargar la página.

## Qué se puede hacer hoy

- **Calendario mensual** con la semana empezando en lunes, el día de hoy resaltado y navegación entre meses (anterior / siguiente, también al cruzar de año).
- **Marca en los días que tienen tareas.**
- **Modal por día:** al hacer clic en un día se abren sus tareas, con la fecha en texto legible. Se cierra con el botón o con la tecla **Escape**.
- **Crear tareas** con título, fecha, prioridad (alta / media / baja) y descripción, con validación de campos.
- **Completar y deshacer:** una tarea hecha pasa al panel derecho y se puede volver a marcar como pendiente.
- **Eliminar tareas.**
- **Tareas de hoy** ordenadas por prioridad.
- **Panel lateral derecho** con las tareas realizadas hoy y un resumen de los próximos días.
- **Historial** de tareas con fecha anterior a hoy, de la más reciente a la más antigua (ruta `/historial`), con scroll interno.
- **Menú lateral con la sección activa marcada** (`NavLink`).
- **Persistencia real:** las tareas viven en Supabase; el front las pide al servidor al abrir la app.

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
├── hooks/
│   └── useTareas.js         estado de las tareas + llamadas al servidor
├── utils/
│   ├── fechas.js            grillaMes, nombreMes, dateATexto, fechaLarga
│   └── constantes.js        orden de las prioridades
├── data/
│   └── tareasEjemplo.js     tareas de la etapa con localStorage (ya no es el estado inicial)
├── styles/              # un CSS por componente
├── App.jsx              # interfaz, calendario y rutas
└── main.jsx
```

**Cómo fluyen los datos:** el hook `useTareas` es el único lugar que sabe de dónde vienen las tareas. Guarda la lista en un estado, la carga con un `fetch` al abrir la app y expone `agregarTarea`, `tareaHecha` y `eliminarTarea`. `App.jsx` llama al hook y baja esas funciones por props hasta las tarjetas, que solo avisan *qué* tarea cambió. Los componentes no guardan copias de las tareas: las calculan en cada render a partir de la lista del hook.

**Forma de una tarea:**

```js
{
  id: "uuid",               // lo genera la base de datos
  titulo: "Preparar presentación",
  fecha: "2026-11-05",      // siempre YYYY-MM-DD
  prioridad: "alta",        // alta | media | baja
  descripcion: "…",
  hecha: false,
}
```

## Backend

El servidor es una API en **Express** que habla con una tabla `tareas` de **Supabase** (PostgreSQL). Vive en una carpeta `server/` al lado de `client/` y, por ahora, **no forma parte de este repositorio**: este repo contiene solo el front.

| Pedido | Ruta | Qué hace | Respuesta |
|---|---|---|---|
| `GET` | `/tareas` | Devuelve todas las tareas | `200` + lista |
| `POST` | `/tareas` | Crea una tarea | `201` + la tarea con su `id` |
| `PATCH` | `/tareas/:id` | Cambia `hecha` | `200` + la tarea, o `404` si no existe |
| `DELETE` | `/tareas/:id` | Elimina una tarea | `204` sin contenido |

Si Supabase falla, las rutas responden `500` con el mensaje del error.

**Tabla `tareas`:** `id` (`uuid`, se genera solo), `titulo` (`text`), `fecha` (`date`), `prioridad` (`text`), `descripcion` (`text`) y `hecha` (`bool`, por defecto `false`).

**Variables de entorno** del servidor (archivo `.env`, que nunca se sube a git):

```
SUPABASE_URL=<URL base del proyecto, termina en .supabase.co>
SUPABASE_KEY=<clave secret del proyecto>
```

La clave `secret` da acceso total a la base: va solo en el servidor, nunca en el front.

## Tecnologías

- React 19
- Vite
- React Router (`react-router-dom`)
- ESLint
- Node.js + Express
- Supabase (PostgreSQL)
- CSS propio, sin librerías de estilos

## Cómo correrlo

Requiere [Node.js](https://nodejs.org/) instalado. El front necesita que el servidor esté corriendo en `http://localhost:3000`.

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

- [ ] Cerrar el modal haciendo clic afuera.
- [ ] Cerrar el formulario de nueva tarea después de crearla.
- [ ] Que el link "Hoy" vuelva al mes actual.
- [ ] Manejo de errores en el front (servidor apagado, respuestas fallidas).
- [ ] Validar los datos también en el servidor (responder `400` si faltan campos).
- [ ] Mover la URL del servidor a una variable de entorno del front.
- [ ] Subir el servidor a un repositorio.
- [ ] Historial real: registro de acciones (creada, completada, eliminada) con fecha y hora.
- [ ] Editar una tarea.
- [ ] Pulido visual final.

## Notas

Es un proyecto de aprendizaje: la lógica de fechas (`utils/fechas.js`) está escrita a mano, sin librerías, a propósito.
