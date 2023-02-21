import Footer from './components/footer';
import SideMenu from './components/sidemenu';
import Nav from './components/nav';
import mySound from './tabern.mp3'
import guild from './adventure.png'
import char from './char2.png'
import char2 from './char3.png'



function Friends() {


    return (

        <div className="FriendsApp">


            <SideMenu></SideMenu>
            <h2 className='Login'>Log In</h2>
            <Nav></Nav>
            <iframe src={mySound} allow="autoplay loop" id="iframeAudio">
            </iframe>
            <img className='coofe' src='https://cdn.discordapp.com/attachments/946523460060975157/1077250363759013888/Momessito_fantasyrpganime_scenery_city_center_1589d12e-2fe1-4c72-a09d-d962e66aad93.png' />
            <h1 style={{ marginTop: '0px', textAlign: 'center' }}>Taberna</h1>
            <p style={{ margin: '10px' }}>A Taberna é um lugar onde você pode encontrar outros jogadores, conversar, compartilhar dicas e estratégias e fazer novas amizades. É o lugar perfeito para se socializar e relaxar entre as missões e desafios.</p>
            <img />
            <div className='Friends'>
                <div className='card'>
                    <img src={char2} />
                    <h2>Kyrius D'Thërai
                    </h2>
                    <div className='starsCard'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>
                </div>
                <div className='card'>
                    <img src={char} />
                    <h2>Eldarion</h2>
                    <div className='starsCard'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>
                </div>
                <div className='card'>
                    <img src='https://cdn.discordapp.com/attachments/946523460060975157/1077336821618458714/tomas14_Male_half_dragon_anime_character_fantasia_dark_fire_Mag_8474a931-fede-4f1e-8bb2-cb5725a558fe.png' />
                    <h2>Eldarion</h2>
                    <div className='starsCard'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>
                </div>
                <div className='card'>
                    <img src='https://cdn.discordapp.com/attachments/946523460060975157/1077360359826006066/Enzo_Momesso_Xx_male_half_dragon_anime_character_fantasia_dark__d725e0ce-1da7-408e-af6a-2ef83cd4a5ef.png' />
                    <h2>Oriseus</h2>
                    <div className='starsCard'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>
                </div>
                <div className='card'>
                    <img src='https://cdn.discordapp.com/attachments/946523460060975157/1077383997841223710/jhon000000_Pietro_is_a_adult_20_years_with_shoulder-length_whit_3ed47b9d-c457-4c02-a195-cd5d0aa4f7e3.png' />
                    <h2>Oriseus</h2>
                    <div className='starsCard'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>
                </div>
                <div className='card'>
                    <img src='https://cdn.discordapp.com/attachments/946523460060975157/1077307650863284275/saint_demon_lord_anime_character_fantasy_Magic_purpler_humanoid_feeef32b-6ebe-4e00-b89d-12cf91430950.png' />
                    <h2>Oriseus</h2>
                    <div className='starsCard'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>
                </div>
                <div className='card'>
                    <img src='https://cdn.discordapp.com/attachments/946523460060975157/1077298740118945902/Momessito_Anime_Fantasy__RPG_half_dragonancient_dragonMan_white_626322bf-a987-4340-9994-b16d28952b5e.png' />
                    <h2>Oriseus</h2>
                    <div className='starsCard'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>


    );

}

export default Friends;
