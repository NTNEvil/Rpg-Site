import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Carrosel extends Component {
    render() {
        return (
            <Carousel showThumbs={false}>
                <div>
                    <img src="https://cdn.discordapp.com/attachments/946523460060975157/1077057943326949426/Momessito_fantasy_hero__black_hair_with_sword_brown_eyes_0c25b31a-108a-4cce-b00c-3d393fbcc179.png" />
                    <p className="legend">Humano</p>
                </div>
                <div>
                    <img src="https://cdn.discordapp.com/attachments/946523460060975157/1077057059708751963/Momessito_male_elf_22_years_warrior_yellow_hair_blue_eyes_308e4e70-90a4-4bfa-a19e-543dc5ccfbd4.png" />
                    <p className="legend">Elfo</p>
                </div>
                <div>
                    <img src="https://cdn.discordapp.com/attachments/946523460060975157/1077057978928205944/Momessito_green_orc_with_a_battle-axe_and_red_eyes_444e4efd-3348-404a-8bc1-f82e3a4ef886.png" />
                    <p className="legend">Orc</p>
                </div>
                <div>
                    <img src="https://cdn.discordapp.com/attachments/946523460060975157/1077060105310318673/Momessito_tiefling_male_b921f191-c651-4d8b-bd13-e74875c2eca0.png" />
                    <p className="legend">Tiefling</p>
                </div>
                <div>
                    <img src="https://cdn.discordapp.com/attachments/946523460060975157/1077060235711225958/Momessito_dragonborn_c4c30b60-8630-42ba-853e-988915234ea3.png" />
                    <p className="legend">DragonBorn</p>
                </div>
                <div>
                    <img src="https://cdn.discordapp.com/attachments/946523460060975157/1077060993143820359/Momessito_fantasy_dwarf_with_hammer_male_c0c9e0ec-b256-4b14-ac52-0ad804ac57cd.png" />
                    <p className="legend">Anão</p>
                </div>
                <div>
                    <img src="https://cdn.discordapp.com/attachments/946523460060975157/1077061679214497844/Momessito_fairywings_female_beautiful_magic_fantasy_world_matur_07ccf1ae-cd3e-4157-bc51-f9115cd2d94d.png" />
                    <p className="legend">Fada</p>
                </div>
            </Carousel>
        );
    }
};

export default Carrosel