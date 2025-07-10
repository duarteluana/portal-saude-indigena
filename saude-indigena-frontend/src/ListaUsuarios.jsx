import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/usuarios")
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error("Erro ao buscar usuários:", err));
  }, []);

  const excluirUsuario = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      fetch(`http://localhost:8080/usuarios/${id}`, {
        method: "DELETE"
      })
        .then(() => {
          alert("Usuário excluído com sucesso.");
          setUsuarios(usuarios.filter(u => u.id !== id));
        })
        .catch(err => alert("Erro ao excluir usuário."));
    }
  };

  const editarUsuario = (id) => {
    navigate(`/cadastro/${id}`);
  };

  const styleFundo = {
    backgroundImage: `url("/saudeindigenafoto.jpeg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "85vh",
    padding: "20px",
    color: "#fff",
  };

  const boxStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "8px",
    padding: "50px",
    maxWidth: "700px",
    margin: "0 auto",
  };

  const listItemStyle = {
    marginBottom: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "10px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const buttonStyle = {
    marginLeft: "8px",
    backgroundColor: "#fff",
    color: "#333",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
  };

  return (
    <div style={styleFundo}>
      <h2
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "30px",
          lineHeight: "1.4",
          fontSize: "3.2rem",
        }}
      >
        Juntos construindo saúde e conhecimento para nossos povos indígenas.
      </h2>
      <div style={boxStyle}>
        <Link to="/cadastro" style={{ color: "#ffd", fontWeight: "bold" }}>
          ➕ Cadastrar novo usuário
        </Link>
        <h1 style={{ color: "#006400" }}>Usuários Cadastrados</h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {usuarios.map((usuario) => (
            <li key={usuario.id} style={listItemStyle}>
              <span>
                <strong style={{ color: "#fff" }}>{usuario.nome}</strong> — <strong style={{ color: "#fff" }}>{usuario.email}</strong>  — <strong style={{ color: "#fff" }}>{usuario.etnia}</strong>  — <strong style={{ color: "#fff" }}>{usuario.aldeia}</strong>
              </span>
              <span>
                <button onClick={() => editarUsuario(usuario.id)} style={buttonStyle}>✏️</button>
                <button onClick={() => excluirUsuario(usuario.id)} style={buttonStyle}>🗑️</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListaUsuarios;
