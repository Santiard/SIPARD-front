import "../styles/layout.css";

export default function AboutPage (){
  return (
    <div className="container">
      <div className="card" style={{maxWidth: 900}}>
        <h2>¿Qué es SIPARD?</h2>
        <p>
          <strong>SIPARD</strong> (Sistema de Identificación de Patrones Relacionales y Distintivos) es una
          herramienta de la Fiscalía General de la Nación que analiza automáticamente grandes volúmenes de
          denuncias. Su función es detectar relaciones y patrones ocultos entre casos, reduciendo la carga
          manual de los funcionarios y generando reportes claros y confiables para apoyar decisiones rápidas
          y basadas en evidencia.
        </p>
      </div>
    </div>
  );
}
