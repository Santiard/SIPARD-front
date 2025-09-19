import React, { useState ,useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/AnalyzeSpecific.css";

export default function AnalyzeEspecific(){

    const {state} =useLocation();
     const initialId = state?.selectedId ?? "";
    const [caseId, setCaseId] = useState("");
    const [limit, setLimit] = useState(10);
    const [threshold, setThreshold] = useState(30);
    const [llm, setLlm] = useState("Ollama (Qwen3:8b)");
    useEffect(() => {
      setCaseId(initialId);
    }, [initialId]);

    return(
        <div>
      <div className="as-card-section">
        <h4>Configuración de Búsqueda</h4>
        <div className="as-form-grid">
          <label>Noticia Criminal:</label>
          <div className="as-row">
            <input  className="as-input" type="text" value={caseId} onChange={e=>setCaseId(e.target.value)} placeholder="Escribe o selecciona un ID" />
            <button className="as-btn">Buscar Caso</button>
          </div>

          <label>Número de resultados:</label>
          <input className="as-input" type="number" min={1} value={limit} onChange={e=>setLimit(parseInt(e.target.value||"0"))} />

          <label>Umbral de similitud:</label>
          <div className="as-row">
            <input className="as-input" type="number" min={0} max={100} value={threshold} onChange={e=>setThreshold(parseInt(e.target.value||"0"))} />
            <select value={llm} onChange={e=>setLlm(e.target.value)}>
              <option>Ollama (Qwen3:8b)</option>
              <option>Ollama (Llama3.1)</option>
            </select>
          </div>
        </div>
        <button className="as-btn-primary">Analizar Caso</button>
      </div>

      <div className="as-section" style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:16}}>
        <div className="as-card1">
          <h4>Conceptos Clave Extraídos</h4>
          <textarea className="placeholder"placeholder="Aquí se mostrarán los conceptos clave extraídos..." />
          <div className="as-row"><button className="as-btn">Copiar Conceptos</button></div>
        </div>

        <div className="as-card2">
          <h4>Casos Similares Encontrados</h4>
          <table className="as-table">
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
          <div className="as-row-section">
            <button className="as-btn1">Crear Grupo</button>
            <button className="as-btn1">Exportar CSV</button>
          </div>
        </div>
      </div>
      </div>
    );
}

