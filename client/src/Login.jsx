import "./styles/styles_login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { peticionLogin } from "../src/utils/variableLogin.js";
export function Login({ setLogin, login }) {
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginExitoso = peticionLogin(user, pass);
    if (loginExitoso) {
      setLogin(!login);
      navigate("/");
    } else {
      return;
    }
  };
  return (
    <div className="box-login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Usuario</label>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
        />
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
