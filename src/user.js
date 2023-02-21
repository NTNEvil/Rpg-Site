import Footer from './components/footer';
import SideMenu from './components/sidemenu';
import Nav from './components/nav';
import mySound from './user.mp3'
import guild from './adventure.png'
import char from './char2.png'


function User() {


  return (

    <div className="UserApp">


      <SideMenu></SideMenu>
      <h2 className='Login'>Log In</h2>
      <Nav></Nav>
      <iframe src={mySound} allow="autoplay" id="iframeAudio">
      </iframe>
      <div className='Profile'>

        <img src={char} />
        <div className='FadeProfile'></div>

        <div className='ProfileInfo'>
          <h2>Nome: <span>Eldarion</span></h2>
          <h2>Raça: <span>Elfo</span></h2>
          <h2>Rank: <span>E</span></h2>
          <h2>Idade: <span>20</span></h2>
          <h2>Classe: <span>Lanceiro</span></h2>
          <div className='ProfileRank'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>

        </div>
        <div className='ProfileAdicional'>
          <h2>Historia</h2>
          <p>
            Era uma vez um jovem elfo chamado Eldarion, que foi criado em um ambiente de luxo e privilégio, sendo o único filho de uma família nobre de uma das mais ricas e influentes casas de seu reino. Eldarion cresceu sendo mimado e arrogante, tratando todos ao seu redor com desdém e indiferença.
            <br /><br /><br />
            Mas um dia, a guerra chegou à sua porta. As forças das trevas invadiram seu reino e atacaram sua casa, matando sua família e destruindo tudo o que ele conhecia. Eldarion teve que fugir, com nada além de suas habilidades e sua coragem.
            <br /><br /><br />
            Na luta pela sobrevivência, Eldarion teve que se juntar às forças do reino, lutando lado a lado com outros elfos, anões e humanos. No começo, ele ainda era arrogante e teimoso, mas a cada batalha ele percebia a importância do trabalho em equipe e da humildade. Eventualmente, ele se tornou um guerreiro habilidoso, dominando a lança como poucos.
            <br /><br /><br />
            Cinco anos se passaram, e Eldarion se tornou um veterano da guerra, um mestre com a lança e um líder respeitado entre as tropas. Mas ele ainda carregava a culpa pela morte de sua família e pela arrogância que o levou a perder tudo. Ele sabia que precisava de redenção, de se tornar um homem melhor.
            <br /><br /><br />
            E foi então que ele ouviu falar das torres que surgiram, que concediam aos guerreiros poderes divinos para enfrentar as forças das trevas. Eldarion sabia que essa era sua chance de redenção, de se tornar um verdadeiro herói e salvar o mundo do poder das trevas.
            <br /><br /><br />
            Ele partiu em sua jornada, determinado a enfrentar todas as provações que encontrasse pelo caminho. E à medida que ele avançava pelas torres, enfrentando monstros terríveis e desafios incríveis, ele se tornava mais forte, mais sábio e mais humilde. E quando finalmente alcançou o topo da última torre, ele estava pronto para enfrentar a escuridão que ameaçava o mundo.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>


  );

}

export default User;
