import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Login({ setLogin, login }) {
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass === "naza") {
      setLogin(!login);
      navigate("/");
    } else {
      return;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Contraseña</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
        />
        <button>entrar</button>
      </form>
    </div>
  );
}
