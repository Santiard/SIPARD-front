# SIPARD Frontend

Este repositorio contiene el **frontend del sistema SIPARD**, desarrollado con **React + Vite**. Su propósito es proveer una interfaz moderna, modular y escalable para la gestión y análisis de casos dentro de SIPARD.

---

## 📂 Estructura del Proyecto

```bash
SIPARD-front-main/
│── .gitignore
│── README.md
│── eslint.config.js
│── index.html
│── package.json
│── package-lock.json
│── vite.config.js
│
├── public/              # Archivos estáticos públicos
├── src/                 # Código fuente principal
│   ├── App.jsx          # Componente raíz
│   ├── App.css          # Estilos globales del App
│   ├── main.jsx         # Punto de entrada
│   ├── index.css        # Estilos globales
│   │
│   ├── assets/          # Imágenes, íconos y recursos
│   ├── styles/          # Estilos modulares
│   │
│   ├── components/      # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── SideBar.jsx
│   │   └── SipardModal.jsx
│   │
│   ├── pages/           # Páginas principales
│       ├── DashboardPage.jsx
│       ├── LoginPage.jsx
│       ├── AboutPage.jsx
│       ├── AnalyzeCasesPage.jsx
│       ├── AnalyzeSpecific.jsx
│       └── CaseGroupsPage.jsx
```

---

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone <url-del-repo>
cd SIPARD-front-main
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Levantar el servidor de desarrollo
```bash
npm run dev
```

### 4. Compilar para producción
```bash
npm run build
```

### 5. Previsualizar build
```bash
npm run preview
```

---

## 🛠️ Tecnologías Utilizadas

- **React 18** (con Hooks y JSX)
- **Vite** (bundler rápido para desarrollo y build)
- **JavaScript (ES6+)**
- **CSS Modules** y estilos globales
- **ESLint** para estandarización de código

---

## 📑 Páginas Principales

- **LoginPage.jsx** → Pantalla de inicio de sesión.  
- **DashboardPage.jsx** → Panel principal del sistema.  
- **AboutPage.jsx** → Información general del sistema.  
- **AnalyzeCasesPage.jsx** → Análisis de casos.  
- **AnalyzeSpecific.jsx** → Análisis detallado de un caso específico.  
- **CaseGroupsPage.jsx** → Agrupación y visualización de grupos de casos.  

---

## 🧩 Componentes Reutilizables

- **Header.jsx** → Encabezado principal con navegación.  
- **SideBar.jsx** → Barra lateral de menús.  
- **SipardModal.jsx** → Modal genérico para distintos usos.  

---

## ⚙️ Configuración

- `vite.config.js` → Configuración de Vite.  
- `eslint.config.js` → Reglas de linting para mantener el estilo del código.  

---

## ✅ Buenas Prácticas

- Usar **componentes reutilizables** siempre que sea posible.  
- Mantener la **separación de responsabilidades** entre `pages` y `components`.  
- Seguir las reglas definidas en **ESLint** antes de hacer commits.  
- Colocar recursos compartidos en la carpeta **assets/**.  
