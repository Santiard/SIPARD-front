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
    useEffect(() => {
      setCaseId(initialId);
    }, [initialId]);
    // Modal con estilo para "Buscar Caso"
    useEffect(() => {
      // Insertar estilos del modal (una sola vez)
      if (!document.getElementById('sipard-modal-styles')) {
        const style = document.createElement('style');
        style.id = 'sipard-modal-styles';
        style.textContent = `
          .SIPARD-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.45);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }
          .SIPARD-modal {
            background: #fff;
            width: min(520px, 92vw);
            border-radius: 14px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            overflow: hidden;
            font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          }
          .SIPARD-modal-header {
            background: #1446a0;
            color: #fff;
            padding: 14px 18px;
            font-weight: 600;
            letter-spacing: .2px;
          }
          .SIPARD-modal-body {
            padding: 18px;
            color: #222;
            line-height: 1.4;
          }
          .SIPARD-modal-actions {
            padding: 12px 18px 18px;
            display: flex;
            justify-content: flex-end;
            gap: 10px;
          }
          .SIPARD-btn {
            border: none;
            cursor: pointer;
            border-radius: 10px;
            padding: 10px 14px;
            font-weight: 600;
          }
          .SIPARD-btn-primary {
            background: #1446a0;
            color: #fff;
          }
          .SIPARD-btn-outline {
            background: transparent;
            color: #1446a0;
            outline: 2px solid #1446a0;
          }
        `;
        document.head.appendChild(style);
      }
      // Crear modal si no existe
      let overlay = document.querySelector('.SIPARD-modal-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'SIPARD-modal-overlay';
        overlay.innerHTML = `
          <div class="SIPARD-modal" role="dialog" aria-modal="true" aria-labelledby="sipard-modal-title">
            <div class="SIPARD-modal-header" id="sipard-modal-title">Caso encontrado</div>
            <div class="SIPARD-modal-body">
              Puede proceder con el análisis.
            </div>
            <div class="SIPARD-modal-actions">
              <button class="SIPARD-btn SIPARD-btn-outline" data-close>Cancelar</button>
              <button class="SIPARD-btn SIPARD-btn-primary" data-close>Aceptar</button>
            </div>
          </div>
        `;
        document.body.appendChild(overlay);
      }
      const open = () => { overlay.style.display = 'flex'; };
      const close = () => { overlay.style.display = 'none'; };
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.closest('[data-close]')) close();
      });
      // Vincular botón "Buscar Caso"
      const buttons = Array.from(document.querySelectorAll('button'));
      const buscarBtn = buttons.find(b => (b.textContent || '').trim().toLowerCase() === 'buscar caso');
      if (buscarBtn) buscarBtn.addEventListener('click', open);
      // Cleanup
      return () => {
        if (buscarBtn) buscarBtn.removeEventListener('click', open);
      };
    }, []);
    
    


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
        <div className="as-card1">
          <h4>Conceptos Clave Extraídos</h4>
          <textarea placeholder="Aquí se mostrarán los conceptos clave extraídos..." />
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
        
      <SipardModal open={showModal} onClose={() => setShowModal(false)} title="Caso encontrado">
        Puede proceder con el análisis.
      </SipardModal>
    
      </div>
      </div>
      </div>
    );
}

