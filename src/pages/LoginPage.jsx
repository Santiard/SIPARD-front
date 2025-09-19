import "../styles/LoginPage.css";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/about");
    }
  return (
    <div className="login-page">
      <form className="formLogin" onSubmit={handleSubmit}>
        <div>
          <img  src={logo} alt="SIPARD APP" className="logosipard-login" />
        </div>

        <div>
          <label>Usuario:</label>
          <input type="text" />
        </div>

        <div>
          <label>Contraseña:</label>
          <input type="password" />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}