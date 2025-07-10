
import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/cadastro" style={{ marginRight: 10 }}>Cadastro</Link>
      <Link to="/mapa" style={{ marginRight: 10 }}>Mapa</Link>
      <Link to="/medicinas" style={{ marginRight: 10 }}>Medicinas</Link>
      <Link to="/sobre">Sobre</Link>
    </nav>
  );
}
