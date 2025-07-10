import React from "react";
import "./MedicinasTradicionais.css";

const plantas = [
  { nome: "Jurema", descricao: "Usada em rituais espirituais, tem propriedades analgésicas e cicatrizantes." },
  { nome: "Guaco", descricao: "Tratamento de tosses, bronquites e problemas respiratórios." },
  { nome: "Carqueja", descricao: "Auxilia na digestão, reduz febres e combate inflamações." },
  { nome: "Urucum", descricao: "Corante natural com ação anti-inflamatória e repelente." },
  { nome: "Copaíba", descricao: "Óleo cicatrizante e antimicrobiano, comum na Amazônia." },
  { nome: "Andiroba", descricao: "Trata dores musculares e pele; também funciona como repelente." },
  { nome: "Ipê-roxo", descricao: "Casca usada como chá no tratamento de infecções e inflamações." },
  { nome: "Sucupira", descricao: "Sementes em infusão para aliviar dores articulares e reumatismos." },
];

const MedicinasTradicionais = () => {
  return (
    <div className="fundo">
      <div className="container">
        <h1>🌿 Medicinas Tradicionais Indígenas</h1>
        <p>
          Os povos indígenas do Brasil mantêm um profundo conhecimento sobre o uso de plantas
          medicinais e práticas curativas ligadas à natureza. Essa sabedoria é ancestral e viva.
        </p>

        <h2>🍃 Plantas Medicinais e seus Usos</h2>

        <div className="cards-container">
          {plantas.map((planta, index) => (
            <div className="card" key={index}>
              <div className="card-title">{planta.nome}</div>
              <div className="card-desc">{planta.descricao}</div>
            </div>
          ))}
        </div>

        <h2>🌺 Saberes Espirituais</h2>
        <p>
          As medicinas indígenas envolvem rituais, cantos, espiritualidade e o saber dos pajés —
          curandeiros respeitados nas comunidades. A cura é integral: corpo, mente e espírito.
        </p>

        <p style={{ fontStyle: "italic", marginTop: "30px" }}>
          *Este conteúdo valoriza o conhecimento tradicional indígena. O uso de plantas deve ser feito
          com orientação e respeito às comunidades originárias.*
        </p>
      </div>
    </div>
  );
};

export default MedicinasTradicionais;
