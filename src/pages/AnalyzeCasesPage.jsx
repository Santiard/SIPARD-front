import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/layout.css";

export default function AnalyzeCasesPage() {
   const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const rows = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    noticia: `Noticia criminal #${i + 1}`,
    narrativa: `Vista previa de la narrativa del caso ${i + 1} con texto de ejemplo para ocupar varias líneas y comprobar el clamp.`,
  }));
  const filtered = rows.filter(r => !search || r.noticia.toLowerCase().includes(search.toLowerCase()));

  const handleClick = () => {
    if (!selectedId) return;
    navigate("/analizarespecifico", { state: { selectedId } });
  };
  return (
    <div className="container">
      <div className="card-case-info">
          <h4>Información del Caso</h4>
          <input value={selectedId ? `Caso seleccionado: ${selectedId}` : ""} placeholder="Seleccione un caso para ver detalles" disabled />
          <div className="row section">
            <button className="btn">Ver Narrativa Completa</button>
            <button className="btn-primary" disabled={!selectedId} onClick={handleClick}>Analizar Este Caso</button>
          </div>
      </div>


      <div className="toolbar">
        <label>Buscar:</label>
        <input placeholder="Buscar por noticia criminal o texto..." value={search} onChange={e=>setSearch(e.target.value)} />
        <button className="btn" onClick={()=>setSearch("")}>Limpiar</button>
      </div>

      <div className="split">
        <div className="card">
          <div className="table-wrapper"> 
          <table className="table table--selectable cases-table">
            <colgroup>
              <col style={{width:"72px"}} />
              <col style={{width:"360px"}} />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>#</th>
                <th>Noticia Criminal</th>
                <th>Narrativa (Vista Previa)</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(r=>(
                <tr key={r.id}
                    aria-selected={selectedId===r.id}
                    tabIndex={0}
                    onClick={()=>setSelectedId(r.id)}
                    onKeyDown={(e)=>{ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); setSelectedId(r.id); }}}>
                  <td>{r.id}</td>
                  <td>{r.noticia}</td>
                  <td>{r.narrativa}</td>
                </tr>
              ))}
              {filtered.length===0 && (
                <tr><td colSpan={3}><div className="empty-state">Sin resultados para “{search}”.</div></td></tr>
              )}
            </tbody>
          </table>
        </div>

        
      </div>
      </div>
    </div>
  );
}
