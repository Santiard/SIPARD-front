import './App.css';
import './styles/web-mock.css';
import './styles/layout.css';

import Sidebar from './componets/SideBar.jsx';
import Header from './componets/Header.jsx';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="app-shell">
      {/* Header superior fijo */}
      <Header />

      {/* Cuerpo en dos columnas: sidebar + main */}
      <div className="app-content">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
