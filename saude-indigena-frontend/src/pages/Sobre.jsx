import React from "react";
import { Link } from "react-router-dom";
import "./Sobre.css";

const Sobre = () => {
  return (
    <div className="sobre-container">
      <h1>Portal Saúde Indígena</h1>

      <section>
        <h2>🌿 Problema Social</h2>
        <p>
          O acesso à saúde de qualidade ainda é um desafio para muitos povos indígenas no Brasil. Segundo o IBGE, mais de 1,7 milhão de indígenas vivem no país, pertencentes a mais de 300 etnias, muitos em regiões remotas sem acesso adequado à saúde.
        </p>
      </section>

      <section>
        <h2>📊 Realidade Alarmante</h2>
        <p>
          De acordo com a ONU (2021) e a Fiocruz, esses povos enfrentam maiores taxas de mortalidade infantil, desnutrição e doenças evitáveis. A falta de comunicação culturalmente adequada também prejudica o atendimento.
        </p>
      </section>

      <section className="historia">
        <h2>🧍‍♀️ História real: Kauã</h2>
        <p>
          Kauã, jovem da etnia Pataxó, vive no sul da Bahia. Quando seu irmão teve febre alta, a família caminhou por duas horas até o posto mais próximo. Sem médico e sem intérprete da língua da avó, o atendimento foi comprometido.
        </p>
      </section>

      <section>
        <h2>💡 Solução Proposta</h2>
        <p>
          O <strong>Portal de Saúde Indígena</strong> é uma aplicação web acessível e culturalmente respeitosa. Oferece:
        </p>
        <ul>
          <li>📚 Cadastro de usuários indígenas interessados em receber orientações de prevenção de doenças.</li>
          <li>🌱 Valorização da medicina tradicional</li>
          <li>📍 Mapa de unidades de saúde próximas</li>
          
        </ul>
      </section>

      <section>
        <h2>🌱 Impacto Social Esperado</h2>
        <p>
          Ao promover a prevenção, acesso e respeito cultural, o projeto apoia diretamente a <strong>ODS 3 – Saúde e Bem-Estar</strong>. Famílias indígenas poderão se cuidar melhor e buscar ajuda de forma mais informada.
        </p>
      </section>

      <Link to="/">← Voltar para Home</Link>
    </div>
  );
};

export default Sobre;
