import React, { useState } from "react";
import "../styles/layout.css";

export default function AnalyzeCasesPage() {
  const [search, setSearch] = useState("");
  const [caseId, setCaseId] = useState("");
  const [limit, setLimit] = useState(10);
  const [threshold, setThreshold] = useState(30);
  const [llm, setLlm] = useState("Ollama (Qwen3:8b)");
  const [selectedId, setSelectedId] = useState(null);

  const rows = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    noticia: `Noticia criminal #${i + 1}`,
    narrativa: `Vista previa de la narrativa del caso ${i + 1} con texto de ejemplo para ocupar varias líneas y comprobar el clamp.`,
  }));
  const filtered = rows.filter(r => !search || r.noticia.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container">

      <div className="toolbar">
        <label>Buscar:</label>
        <input placeholder="Buscar por noticia criminal o texto..." value={search} onChange={e=>setSearch(e.target.value)} />
        <button className="btn" onClick={()=>setSearch("")}>Limpiar</button>
      </div>

      <div className="split">
        <div className="card">
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

        <div className="card case-info">
          <h4>Información del Caso</h4>
          <input value={selectedId ? `Caso seleccionado: ${selectedId}` : ""} placeholder="Seleccione un caso para ver detalles" disabled />
          <div className="row section">
            <button className="btn">Ver Narrativa Completa</button>
            <button className="btn-primary" disabled={!selectedId}>Analizar Este Caso</button>
          </div>
        </div>
      </div>

      <div className="card section">
        <h4>Configuración de Búsqueda</h4>
        <div className="form-grid">
          <label>Noticia Criminal:</label>
          <div className="row">
            <input placeholder="Ingrese el ID de la noticia criminal" value={caseId} onChange={e=>setCaseId(e.target.value)} />
            <button className="btn">Buscar Caso</button>
          </div>

          <label>Número de resultados:</label>
          <input type="number" min={1} value={limit} onChange={e=>setLimit(parseInt(e.target.value||"0"))} />

          <label>Umbral de similitud:</label>
          <div className="row">
            <input type="number" min={0} max={100} value={threshold} onChange={e=>setThreshold(parseInt(e.target.value||"0"))} />
            <select value={llm} onChange={e=>setLlm(e.target.value)}>
              <option>Ollama (Qwen3:8b)</option>
              <option>Ollama (Llama3.1)</option>
            </select>
          </div>
        </div>
        <button className="btn-primary">Analizar Caso</button>
      </div>

      <div className="section" style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:16}}>
        <div className="card">
          <h4>Conceptos Clave Extraídos</h4>
          <textarea placeholder="Aquí se mostrarán los conceptos clave extraídos..." />
          <div className="row"><button className="btn">Copiar Conceptos</button></div>
        </div>

        <div className="card">
          <h4>Casos Similares Encontrados</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Noticia Criminal</th>
                <th>Narrativa (Vista Previa)</th>
                <th>Score</th>
                <th>Conceptos</th>
                <th>Departamento</th>
                <th>Municipio</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({length:3}).map((_,i)=>(
                <tr key={i}>
                  <td>NC-{i+1}</td>
                  <td>Resumen del caso {i+1}…</td>
                  <td>{Math.round(80 - i*10)}%</td>
                  <td>fraude, estafa, extorsión</td>
                  <td>Antioquia</td>
                  <td>Medellín</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row section">
            <button className="btn">Crear Grupo</button>
            <button className="btn">Exportar CSV</button>
          </div>
        </div>
      </div>

    </div>
  );
}
