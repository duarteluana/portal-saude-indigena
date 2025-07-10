import React from "react";
import "./MapaSaude.css";

const MapaSaude = () => {
  return (
    <div className="fundo">
      <div className="container">
        <h2>📍 Mapa de Unidades de Saúde Próximas</h2>
        <p>Consulte abaixo unidades básicas de saúde em sua região.</p>

        <div className="mapa-wrapper">
          <iframe
            title="Mapa Unidades de Saúde"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.9548691496896!2d-38.96514272597002!3d-7.01109669295686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a23b79db5b84f1%3A0x188364bd3a5187de!2sUnidade%20B%C3%A1sica%20de%20Sa%C3%BAde%20-%20Ind%C3%ADgena!5e0!3m2!1spt-BR!2sbr!4v1688240543585!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapaSaude;
