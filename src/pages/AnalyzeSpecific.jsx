import React, { useState ,useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/AnalyzeSpecific.css";
import SipardModal from "../components/SipardModal";

export default function AnalyzeEspecific(){

    const {state} =useLocation();
     const initialId = state?.selectedId ?? "";
    const [caseId, setCaseId] = useState("");
    const [limit, setLimit] = useState(10);
    const [threshold, setThreshold] = useState(30);
    const [llm, setLlm] = useState("Ollama (Qwen3:8b)");
    const [showModal, setShowModal] = useState(false);
    const [showCreateGroup, setShowCreateGroup] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [groupDesc, setGroupDesc] = useState("");
    const [groupNotes, setGroupNotes] = useState("");
    const [groupCases, setGroupCases] = useState([]);
    const [showCopyModal, setShowCopyModal] = useState(false);
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
            <button className="as-btn" onClick={() => setShowModal(true)}>Buscar Caso</button>
          </div>

          <label>Número de resultados:</label>
          <input className="as-input" type="number" min={1} value={limit} onChange={e=>setLimit(parseInt(e.target.value||"0"))} />

          <label>Umbral de similitud:</label>
          <div className="as-row">
            <input className="as-input" type="number" min={0} max={100} value={threshold} onChange={e=>setThreshold(parseInt(e.target.value||"0"))} />
          </div>
        </div>
        <button className="as-btn-primary">Analizar Caso</button>
      </div>

      <div className="as-section" style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:16}}>
        <div className="as-card" style={{display:"flex", flexDirection:"column", gap:"8px"}}>
          <h4>Conceptos Clave Extraídos</h4>
          <textarea className="as-textarea" placeholder="Aquí se mostrarán los conceptos clave extraídos..."></textarea>
          <div style={{textAlign:"right"}}>
            <button className="as-btn" onClick={() => setShowCopyModal(true)}>Copiar Conceptos</button>
          </div>
        </div>

        <div className="as-card">
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
          <div className="as-row section">
            <button className="as-btn" onClick={() => { setGroupCases([{ id: (caseId || "5400160007272..."), score: 0.272 }]); setShowCreateGroup(true); }}>Crear Grupo</button>
            <button className="as-btn">Exportar CSV</button>
          </div>
        
      <SipardModal open={showModal} onClose={() => setShowModal(false)} title="Caso encontrado">
        Puede proceder con el análisis.
      </SipardModal>
    
      
      
      <SipardModal open={showCreateGroup} onClose={() => setShowCreateGroup(false)} title="Crear Grupo de Casos" 
        footer={(
          <>
            <button className="sipard-btn sipard-btn-outline" onClick={() => setShowCreateGroup(false)}>Cancel</button>
            <button className="sipard-btn sipard-btn-primary" onClick={() => { /* submit aquí */ setShowCreateGroup(false); }}>OK</button>
          </>
        )}>
        <div style={{display:"grid", gap:"10px"}}>
          <label style={{display:"grid", gap:"6px"}}>
            <span>Nombre:</span>
            <input type="text" placeholder="Nombre del grupo" value={groupName} onChange={(e)=>setGroupName(e.target.value)} />
          </label>
          <label style={{display:"grid", gap:"6px"}}>
            <span>Descripción:</span>
            <textarea className="as-textarea" placeholder="Aquí se mostrarán los conceptos clave extraídos..." value={groupDesc} onChange={(e)=>setGroupDesc(e.target.value)}></textarea>
          </label>
          <label style={{display:"grid", gap:"6px"}}>
            <span>Notas:</span>
            <textarea className="as-textarea" placeholder="Aquí se mostrarán los conceptos clave extraídos..."value={groupNotes} onChange={(e)=>setGroupNotes(e.target.value)}></textarea>
          </label>

          <div style={{marginTop:"8px"}}>
            <div style={{marginBottom:"6px", fontWeight:600}}>Casos a incluir en el grupo:</div>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%", borderCollapse:"collapse"}}>
                <thead>
                  <tr>
                    <th style={{textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px"}}>Noticia Criminal</th>
                    <th style={{textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px"}}>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {(groupCases && groupCases.length ? groupCases : [{id:(caseId || "5400160007272..."), score: 0.272}]).map((c, idx) => (
                    <tr key={idx}>
                      <td style={{borderBottom:"1px solid #eee", padding:"8px"}}>{c.id}</td>
                      <td style={{borderBottom:"1px solid #eee", padding:"8px"}}>{typeof c.score === "number" ? c.score.toFixed(3) : c.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SipardModal>
    
      
      
      <SipardModal open={showCopyModal} onClose={() => setShowCopyModal(false)} title="Éxito">
        Conceptos clave copiados exitosamente.
      </SipardModal>
    
      </div>
      </div>
      </div>
    );
}

