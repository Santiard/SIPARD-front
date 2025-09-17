import "../styles/layout.css";
import "../styles/Sidebar.css";
import salir from "../assets/logout.png";

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__logoTop">SIPARD</div>

        <ul className="sidebar__menu">
          <li><a className="menu-btn" href="#revisar">REVISAR CASOS</a></li>
          <li><a className="menu-btn" href="#analizar">ANALIZAR CASOS</a></li>
          <li><a className="menu-btn" href="#reportes">GESTIONAR REPORTES</a></li>
        </ul>

        <div className="sidebar__spacer" />

        <div className="menu-secondary">
          <a className="menu-btn" href="#nuevo">CARGAR NUEVO UNIVERSO</a>

          <a className="menu-logout" href="#logout" title="Salir">
            <img className="logos" src={salir} alt="" />
            <span>Salir</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
