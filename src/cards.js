import Footer from "./components/footer";
import Login from "./components/Login";
import Nav from "./components/nav";
import SideMenu from "./components/sidemenu";

function Cards() {


    // Seleciona todas as cartas
    const cards = document.querySelectorAll('.cardd');

    function girar() {
        cards.forEach(card => {
            card.addEventListener('click', () => {
                // Adiciona ou remove a classe "flipped" da carta clicada
                card.classList.toggle('flipped');
            });
        });

    }

    return (
        // rotas
        <div className="Cards" onClick={girar}>
            <SideMenu></SideMenu>
            <Login></Login>
            <Nav></Nav>
            <h1 style={{ marginTop: '100px', textAlign: 'center' }}>CARTAS DE HABILIDADES</h1>
            <div class="cardd">
                <div class="card-image"><img src="https://cdn.discordapp.com/attachments/1077441049024282756/1077443793906843698/Momessito_stab_ability__rpg__attack__assasin__hand_with_dagger_00326fb9-5e82-41e5-921e-a500d9938b3f.png" /></div>
                <div class="card-description">
                    <p class="text-title">O dominador</p>
                    <p class="text-Star">Stars: </p>
                    <p class="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>
            <div class="cardd">
                <h5>HP: +4 - MP: -5</h5>
                <div class="card-image"><img src="https://cdn.discordapp.com/attachments/1077441049024282756/1077449139144630322/Momessito_Heal_Magic_casting_green_speel__using_in_hurt_people_904b07a6-141d-4555-a073-5e880e613b17.png" /></div>
                <div class="card-description">
                    <p class="text-title">Cura Rapida</p>
                    <p class="text-Rank">Rank:E</p>
                    <p class="text-Star">Stars: </p>
                    <p class="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>
            <div class="cardd">
                <h5>Ag: +2 - MP: -1</h5>
                <div class="card-image"><img src="https://cdn.discordapp.com/ephemeral-attachments/1077441049024282756/1077456343943876708/grid_0.webp" /></div>
                <div class="card-description">
                    <p class="text-title">Concentração</p>
                    <p class="text-Rank">Rank:E</p>
                    <p class="text-Star">Stars: </p>
                    <p class="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>

            <div class="cardd">
                <h5>MP: -2</h5>
                <div class="card-image"><img src="https://cdn.discordapp.com/ephemeral-attachments/1077441049024282756/1077456293574496256/grid_0.webp" /></div>
                <div class="card-description">
                    <p class="text-title">Senso de Perigo</p>
                    <p class="text-Rank">Rank:E</p>
                    <p class="text-Star">Stars: </p>
                    <p class="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}


export default Cards;