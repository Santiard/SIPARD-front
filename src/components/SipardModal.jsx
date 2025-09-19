import React from "react";
import ReactDOM from "react-dom";

export default function SipardModal({ open, title = "Caso encontrado", onClose, children, confirmLabel = "Aceptar", cancelLabel = "Cancelar" }) {
  if (!open) return null;

  const overlay = (
    <div className="sipard-modal-overlay" onClick={(e) => { if (e.target.classList.contains("sipard-modal-overlay")) onClose?.(); }}>
      <div className="sipard-modal" role="dialog" aria-modal="true" aria-labelledby="sipard-modal-title">
        <div className="sipard-modal-header" id="sipard-modal-title">{title}</div>
        <div className="sipard-modal-body">
          {children || "Puede proceder con el análisis."}
        </div>
        <div className="sipard-modal-actions">
          <button className="sipard-btn sipard-btn-outline" onClick={onClose}>{cancelLabel}</button>
          <button className="sipard-btn sipard-btn-primary" onClick={onClose}>{confirmLabel}</button>
        </div>
      </div>
      <style>{`
        .sipard-modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.45);
          display: flex; align-items: center; justify-content: center; z-index: 1000;
        }
        .sipard-modal {
          background: #fff; width: min(520px, 92vw); border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2); overflow: hidden;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
        }
        .sipard-modal-header { background: #1446a0; color: #fff; padding: 14px 18px; font-weight: 600; letter-spacing: .2px; }
        .sipard-modal-body { padding: 18px; color: #222; line-height: 1.4; }
        .sipard-modal-actions { padding: 12px 18px 18px; display: flex; justify-content: flex-end; gap: 10px; }
        .sipard-btn { border: none; cursor: pointer; border-radius: 10px; padding: 10px 14px; font-weight: 600; }
        .sipard-btn-primary { background: #1446a0; color: #fff; }
        .sipard-btn-outline { background: transparent; color: #1446a0; outline: 2px solid #1446a0; }
      `}</style>
    </div>
  );
  const portalRoot = document.body;
  return ReactDOM.createPortal(overlay, portalRoot);
}
