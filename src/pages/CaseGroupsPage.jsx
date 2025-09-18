import { useState } from "react";
import "../styles/layout.css";

export default function CaseGroupsPage() {
  const groups = [
    {id:7, nombre:"Extorsion con Qwen8b", casos:40, fecha:"16/09/2025 09:50"},
    {id:6, nombre:"GrupoNewModelsCesarSERFINANZA", casos:30, fecha:"12/09/2025 17:45"},
    {id:5, nombre:"DobleFiltroCesarSERFINANZA", casos:30, fecha:"12/09/2025 16:11"},
    {id:4, nombre:"SERFINANZA CESAR QWEN", casos:30, fecha:"12/09/2025 14:36"},
    {id:3, nombre:"GrupoConHechos", casos:50, fecha:"10/09/2025 23:21"},
    {id:2, nombre:"Grupo1100160909692023...", casos:50, fecha:"10/09/2025 22:46"},
    {id:1, nombre:"Z", casos:1, fecha:"10/09/2025 22:23"},
  ];
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  return (
    <div className="container">

      <div className="split">
        <div className="card">
          <table className="table table--selectable groups-table">
            <colgroup>
              <col style={{width:"72px"}} />
              <col />
              <col style={{width:"120px"}} />
              <col style={{width:"220px"}} />
            </colgroup>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Casos</th>
                <th>Fecha Creación</th>
              </tr>
            </thead>
            <tbody>
              {groups.map(g=>(
                <tr key={g.id}
                    aria-selected={selectedGroupId===g.id}
                    tabIndex={0}
                    onClick={()=>setSelectedGroupId(g.id)}
                    onKeyDown={(e)=>{ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); setSelectedGroupId(g.id); }}}>
                  <td>{g.id}</td>
                  <td>{g.nombre}</td>
                  <td style={{textAlign:'right'}}>{g.casos}</td>
                  <td>{g.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card case-info">
          <h4>Seleccione un grupo para ver detalles</h4>
          <div className="row">
            <button className="btn" disabled={!selectedGroupId}>Ver Detalles Completos</button>
            <button className="btn" disabled={!selectedGroupId}>Editar Grupo</button>
          </div>
          <div className="row">
            <button className="btn" disabled={!selectedGroupId}>Exportar Grupo</button>
            <button className="btn" disabled={!selectedGroupId}>Eliminar Grupo</button>
          </div>
        </div>
      </div>

    </div>
  );
}
