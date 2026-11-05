const API = import.meta.env.VITE_API_URL;
export async function peticionLogin(user, pass) {
  const respuesta = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user, pass }),
  });
  return respuesta.ok;
}
