import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import './styles/web-mock.css'
import './styles/layout.css'

import DashboardPage from './pages/DashboardPage.jsx'
import AnalyzeCasesPage from './pages/AnalyzeCasesPage.jsx'
import CaseGroupsPage from './pages/CaseGroupsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import AnalyzeEspecific  from './pages/AnalyzeSpecific.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<LoginPage />} />

        {/* App es el layout raíz que pinta Header + Sidebar para rutas privadas */}
        <Route element={<App />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analizar" element={<AnalyzeCasesPage />} />
          <Route path="/grupos" element={<CaseGroupsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/analizarespecifico" element={<AnalyzeEspecific/>}/>
          {/* alias por compatibilidad */}
          <Route path="/AboutPage" element={<AboutPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
