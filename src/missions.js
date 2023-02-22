import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Nav from "./components/nav";
import SideMenu from "./components/sidemenu";

const missions = [
  {
    name: "Salvar a princesa",
    description:
      "A princesa foi sequestrada pelo dragão! Derrote o dragão e salve a princesa.",
    difficulty: "C",
    reward: "1.000 moedas de ouro",
  },
  {
    name: "Derrotar o bando de goblins",
    description:
      "Os goblins estão atacando a vila! Derrote o líder do bando de goblins e proteja a vila.",
    difficulty: "B",
    reward: "2.000 moedas de ouro",
  },
  {
    name: "Encontrar o tesouro perdido",
    description:
      "Um tesouro lendário está escondido em algum lugar na floresta. Encontre o tesouro e fique rico!",
    difficulty: "A",
    reward: "5.000 moedas de ouro",
  },
  {
    name: "Conquistar a torre dos magos",
    description:
      "A torre dos magos é uma fortaleza impenetrável. Derrote o líder dos magos e tome a torre para si.",
    difficulty: "S",
    reward: "10.000 moedas de ouro",
  },
  {
    name: "Enfrentar o dragão ancestral",
    description:
      "O dragão ancestral é um monstro lendário de poder inimaginável. Derrote-o e torne-se uma lenda viva.",
    difficulty: "SS",
    reward: "50.000 moedas de ouro",
  },
  {
    name: "Salvar o mundo da escuridão",
    description:
      "Um mal antigo está despertando e ameaça consumir o mundo. Junte-se a outros heróis e derrote o mal para sempre.",
    difficulty: "SSS",
    reward: "100.000 moedas de ouro",
  },
];

function Missions() {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpanded = () => {
      setExpanded(!expanded);
    };
  
    return (
        <div>
                    <Nav></Nav>
        <SideMenu></SideMenu>
        <Login></Login>
      <div className="mission-board">

        <h1>Missões disponíveis:</h1>
        <div className="missions">
          {expanded ? (
            missions.map((mission, index) => (
              <div className="mission-card mission" key={index}>
                <h2>{mission.name}</h2>
                <p>{mission.description}</p>
                <p>
                  <strong>Dificuldade:</strong> {mission.difficulty}
                </p>
                <p>
                  <strong>Recompensa:</strong> {mission.reward}
                </p>
              </div>
            ))
          ) : (
            <div className="mission-card mission">
              <p>Selecione uma missão para mais informações.</p>
            </div>
          )}
        </div>
        <div className="mission-buttons">
          {expanded ? (
            <button onClick={toggleExpanded}>Recolher</button>
          ) : (
            <button onClick={toggleExpanded}>Expandir</button>
          )}
        </div>
      </div>
      </div>
    );
  }

export default Missions;
