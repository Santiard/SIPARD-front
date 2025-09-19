import "../styles/layout.css";
import "../styles/Header.css";
import logoSipard from "../assets/logo.jpg"; 
import fiscalia from "../assets/1.jpg"; 

export default function Header({ username = "" }) {
  return (
    <header className="header app-header">
      {}
      <img src={logoSipard} alt="Perfil" className="perfil" />
      <h1 className="header__title">SIPARD</h1>

      <div className="header__right">
        <img className="header__badge" src={fiscalia} alt="Fiscalía General de la Nación" />
        <div className="div-perfil">
          {username ? <span>{username}</span> : null}
          <a href="#perfil">
            
          </a>
        </div>
      </div>
    </header>
  );
}
