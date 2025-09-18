import "../styles/layout.css";

export default function DashboardPage() {
  return (
    <div className="container">
      <div className="card" style={{maxWidth: 520}}>
        <h3>Bienvenido</h3>
        <p>Esta es una vista placeholder del Dashboard mientras se integran APIs.</p>
      </div>

      <div className="card section" style={{maxWidth: 520}}>
        <h4>Última carga</h4>
        <p><strong>Archivo:</strong> {localStorage.getItem('sipard:lastCsvName') || '—'}</p>
        <p><strong>Filas:</strong> {localStorage.getItem('sipard:lastCsvRows') || '—'}</p>
        <div className="row">
          <a className="btn" href="/analizar">Ir a Analizar Casos</a>
        </div>
      </div>
    </div>
  );
}
