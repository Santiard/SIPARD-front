import "../styles/layout.css";
import "../styles/Sidebar.css";
import salir from "../assets/logout.png";
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function Sidebar(){
  const inputRef = useRef(null);
  const nav = useNavigate();

  const showToast = (msg, type='ok') => {
    const el = document.createElement('div');
    el.className = 'toast' + (type==='error' ? ' error' : '');
    el.textContent = msg;
    document.body.appendChild(el);
    requestAnimationFrame(()=> el.classList.add('show'));
    setTimeout(()=>{ el.classList.remove('show'); setTimeout(()=>el.remove(), 250); }, 2500);
  };

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if(!file) return;
    try {
      const text = await file.text();
      // Guardamos un resumen mínimo en localStorage
      const rows = text.split(/\r?\n/).filter(Boolean).length;
      localStorage.setItem('sipard:lastCsvName', file.name);
      localStorage.setItem('sipard:lastCsvRows', String(rows));
      showToast(`Archivo CSV cargado: ${file.name} (${rows} líneas)`);
      // No navegamos automáticamente; el flujo es ir luego a Revisar Casos
    } catch(err){
      console.error(err);
      showToast('Error al cargar el CSV', 'error');
    } finally {
      e.target.value = '';
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__logoTop">SIPARD</div>

        <ul className="sidebar__menu">
          <li><Link className="menu-btn" to="/dashboard">REVISAR CASOS</Link></li>
          <li><Link className="menu-btn" to="/analizar">ANALIZAR CASOS</Link></li>
          <li><Link className="menu-btn" to="/grupos">ASOCIAR CASOS</Link></li>
        </ul>

        <div className="sidebar__spacer" />

        <div className="menu-secondary">
          <button className="menu-btn" onClick={()=>inputRef.current?.click()}>CARGAR UNIVERSO</button>
          <input ref={inputRef} type="file" accept=".csv" style={{display:"none"}} onChange={handleUpload} /><div className="logout-area">{/* logout fixed bottom */}</div>

        </div>
      
        <div className="logout-area">


          <Link className="menu-logout" to="/login" title="Salir" onClick={(e)=>{e.preventDefault(); nav("/login");}}>
            <img className="logos" src={salir} alt="" />
            <span>Salir</span>
          </Link>
          </div>
      </div>
    </aside>
  );
}
