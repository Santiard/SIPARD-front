import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/LoginPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/AboutPage" element={<AboutPage/>}/>
      </Routes>
    </Router>
  );
}

export default App


