import express from "express";
import cors from "cors";
import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("El servidor funciona");
});

app.post("/login", async (req, res) => {
  const { user, pass } = req.body;
  const { data, error } = await supabase
    .from("Users")
    .select("id,pass")
    .eq("user", user)
    .maybeSingle();
  if (error) {
    return res.status(500).json({ error: error.message });
  } else {
    if (!data || data.pass !== pass) {
      return res.status(401).json({ error: "usuario no encontrado" });
    }
  }
  return res.json({ ok: true });
});

app.get("/tareas", async (req, res) => {
  const { data, error } = await supabase.from("tareas").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.send(data);
  }
});

app.post("/tareas", async (req, res) => {
  const { titulo, fecha, prioridad, descripcion } = req.body;
  const { data, error } = await supabase
    .from("tareas")
    .insert({ titulo, fecha, prioridad, descripcion })
    .select();
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(201).json(data[0]);
  }
});
app.delete("/tareas/:id", async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("tareas").delete().eq("id", id);
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(204).send();
  }
});

app.patch("/tareas/:id", async (req, res) => {
  const { id } = req.params;
  const { hecha } = req.body;
  const { data, error } = await supabase
    .from("tareas")
    .update({ hecha })
    .eq("id", id)
    .select();
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    if (data.length === 0) {
      res.status(404).json({ error: "Tarea no encontrada" });
    } else {
      res.json(data[0]);
    }
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
