import "../styles/layout.css";
import "../styles/Header.css";
import logoSipard from "../assets/fiscalia-general.png"; 
import fiscalia from "../assets/1.jpg"; 

export default function Header() {
  return (
    <header className="header app-header">
      {}


      <img src={logoSipard} alt="FISCALIA" className="logo" />

      <div className="header__right">
        <div className="div-perfil">
        </div>
      </div>
    </header>
  );
}
