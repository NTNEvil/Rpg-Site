import Footer from './components/footer';
import SideMenu from './components/sidemenu';
import Nav from './components/nav';
import sign from './sign.png'

import React, { useState } from "react";

const Missions = () => {
    const [nomeGerado, setNomeGerado] = useState("");

    const gerarNome = (e) => {
        e.preventDefault();
        const opcao = e.target.elements.opcao.value;
        let listaNomes;
        switch (opcao) {
            case "1":
                listaNomes = ["Coletar ervas medicinais para o curandeiro local", "Entregar uma mensagem para um NPC em outra cidade", "Caçar animais selvagens que estão atacando a vila", "Coletar 10 ervas medicinais no campo.","Levar uma carta importante de um vilarejo para outro, atravessando uma floresta infestada de monstros.","Proteger uma caravana de mercadores em sua viagem pelo deserto.","Encontrar um cachorro perdido para o seu dono." , "Encontrar um baú escondido em uma caverna próxima." , 'Capturar 5 coelhos vivos para um criador de animais.' , 'Ajudar um ferreiro a coletar minérios para fazer novas armas.', 'Escoltar um grupo de fazendeiros até a cidade, protegendo-os de ladrões e monstros.',
                'Encontrar um agricultor desaparecido em uma floresta próxima.',
                'Derrotar um grupo de goblins que estão saqueando uma pequena cidade.',
                'Descobrir o motivo do sumiço de água de uma vila próxima.',
                'Limpar uma mina de monstros para que ela possa ser reaberta.',
                'Ajudar um grupo de mineiros a sair de uma mina que desmoronou.',
                'Ajudar um comerciante a proteger sua loja de ladrões noturnos.',
                'Descobrir o responsável por uma série de roubos em uma pequena cidade.'
            
            ];
                break;
            case "2":
                listaNomes = ["Eduardo", "Fábio", "Gustavo", "Henrique"];
                break;
            case "3":
                listaNomes = ["Isabela", "Joana", "Karen", "Larissa"];
                break;
            default:
                listaNomes = [];
        }
        const nomeAleatorio = listaNomes[Math.floor(Math.random() * listaNomes.length)];
        setNomeGerado(nomeAleatorio);
    };

    return (
        <div className='missions'>
            <SideMenu></SideMenu>
            <img className='miss' src='https://external-preview.redd.it/t6QF6W_IsVOcgzooxhxfnB-6o_TcGiVy5ng5tORNAxg.png?format=pjpg&auto=webp&s=648ab44172042f7537066da1161ac3bda5da8dbf'/>
            <h2 className='Login'>Log In</h2>
            <Nav></Nav>
            <form onSubmit={gerarNome}>
                <label>
                    Escolha uma opção:
                    <br />          <br />
                    <br />

                    <select name="opcao">
                        <option value="1">Rank E</option>
                        <option value="2">Rank D</option>
                        <option value="3">Rank C</option>
                        <option value="3">Rank B</option>
                        <option value="3">Rank A</option>
                        <option value="3">Rank S</option>
                        <option value="3">Rank SSS</option>
                    </select>
                </label>
                <br />
                <br />          <br />
                    <br />
                <button type="submit">Gerar Missão</button>
            </form>
            <h1>Missoes</h1>

            <div id="nome">{nomeGerado}</div>
        </div>
    );
};

export default Missions;