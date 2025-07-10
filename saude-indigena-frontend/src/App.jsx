import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre";
import Navbar from "./pages/Navbar";
import MapaSaude from "./pages/MapaSaude";
import MedicinasTradicionais from "./pages/MedicinasTradicionais";
import CadastroUsuario from "./pages/CadastroUsuario";
import ListaUsuarios from "./ListaUsuarios";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListaUsuarios />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/cadastro/:id" element={<CadastroUsuario />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/mapa" element={<MapaSaude />} />
        <Route path="/medicinas" element={<MedicinasTradicionais />} />
      </Routes>
    </Router>
  );
}

export default App;
