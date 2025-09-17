import "../styles/LoginPage.css";
import logo from "../assets/logo.jpg";
import AboutPage from "./AboutPage.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/AboutPage");
    }
  return (
    <div>
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

        <button type="submit" on>Entrar</button>
      </form>
    </div>
  );
}