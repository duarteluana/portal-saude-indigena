import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const CadastroUsuario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    aldeia: "",
    etnia: ""
  });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/usuarios/${id}`)
        .then((res) => res.json())
        .then((data) => setUsuario(data))
        .catch((err) => console.error("Erro ao buscar usuário:", err));
    }
  }, [id]);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const method = id ? "PUT" : "POST";
    const url = id
      ? `http://localhost:8080/usuarios/${id}`
      : "http://localhost:8080/usuarios";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao salvar usuário");
        alert(id ? "Usuário atualizado!" : "Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };


  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to right, #114c5fb2, #0280909d)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px"
  };

  const formBox = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
    width: "100%",
    maxWidth: "500px",
    textAlign: "left"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem"
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#114B5F",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer"
  };

  const linkStyle = {
    display: "block",
    textAlign: "center",
    marginTop: "20px",
    color: "#114B5F",
    fontWeight: "bold",
    textDecoration: "none"
  };

  return (
    <div style={containerStyle}>
      <div style={formBox}>
        <h2 style={{ textAlign: "center" }}>
          {id ? "Editar Usuário" : "Cadastro de Usuário"}
        </h2>
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <label>Aldeia:</label>
          <input
            type="text"
            name="aldeia"
            value={usuario.aldeia}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <label>Etnia:</label>
          <input
            type="text"
            name="etnia"
            value={usuario.etnia}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            {id ? "Atualizar" : "Cadastrar"}
          </button>
        </form>
        <Link to="/" style={linkStyle}>← Voltar para Home</Link>
      </div>
    </div>
  );
};

export default CadastroUsuario;
