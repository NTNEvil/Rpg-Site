import './App.css';
import Map from './map.png'
import War from './war.png'
import God from './god.png'
import dest from './destr.png'
import monster from './monsters.png'
import orn from './ornam.png'
import mySound from './music.mp3'
import ReactAudioPlayer from 'react-audio-player';
import Footer from './components/footer';
import Carrosel from './components/carrosel';
import SideMenu from './components/sidemenu';

import Nav from './components/nav';

function App() {


  return (

    <div className="App">


      <SideMenu></SideMenu>
      <iframe src={mySound} allow="autoplay" id="iframeAudio">
      </iframe>
      <h2 className='Login'>Log In</h2>
      <Nav></Nav>
      <main className='Canvas'><div className='Fade'></div>      <h1 className='title'> Earth of Dungeons </h1> <h2 className='subtitle'>Explore o Mundo de magia</h2><img src={Map} className='Map' /></main>

      <div className='light'></div>
      <div className='light2'></div>
      <div className='Scroll'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
        Scroll</div>
      <div className='canvas1'>        <h1>O mundo</h1>
        <p>Houve um tempo em que a paz reinava entre as diferentes raças do mundo de Jigen. Elfos, anões, humanos, orcs, todos coexistiam pacificamente, compartilhando suas culturas e tradições. No entanto, tudo mudou quando a guerra eclodiu entre eles. Ninguém sabe exatamente qual foi a causa, mas logo as batalhas se tornaram comuns e o mundo se tornou um lugar perigoso, cheio de morte e destruição.
        </p>
        <div className='ornnament'><img src={orn} className='orn' /><img className='imgHistory' src={War} /></div>

        <p>A guerra durou por uma década, deixando um rastro de destruição e sofrimento em todo o mundo. Mas justamente quando parecia que as coisas não poderiam piorar, um novo mal surgiu das trevas. Monstros horríveis começaram a aparecer, aterrorizando as pessoas e destruindo tudo em seu caminho. Esses monstros eram diferentes de tudo o que já havia sido visto antes, e logo ficou claro que eles não tinham nenhuma relação com qualquer das raças envolvidas na guerra.
        </p>
        <div className='ornnament'><img src={orn} className='orn' /><img className='imgHistory' src={dest} /></div>
        <p>Mas os monstros não eram a única ameaça. De repente, enormes torres começaram a aparecer em todo o mundo, como se tivessem surgido do nada. Essas torres eram altas, tão altas que tocavam o céu, e pareciam estar envoltas em uma aura sombria e misteriosa. Poucas pessoas se atreviam a se aproximar delas, mas a lenda dizia que aqueles que conseguissem escalar até o topo se tornariam a própria encarnação do deus que habitava a torre.
        </p>
        <div className='ornnament'><img src={orn} className='orn' /><img className='imgHistory' src={God} /></div>
        <p>
          Agora, com os monstros das trevas destruindo tudo em seu caminho e as torres atraindo a atenção de todos, o mundo se tornou ainda mais perigoso e imprevisível. As sete raças rivais terão que deixar suas diferenças de lado e unir forças para enfrentar essas novas ameaças, antes que seja tarde demais.
        </p>
        <div className='ornnament'><img src={orn} className='orn' /><img className='imgHistory' src={monster} /></div>

      </div>
      <hr></hr>
      <div className='canvas2'>
        <h1>Raças</h1>
        <p>No mundo de Jigen dos sete reinos, a diversidade é uma característica notável. As sete raças que habitam este mundo são muito diferentes umas das outras e possuem características distintas.
<br/><br/><br/>
Os humanos, por exemplo, são conhecidos por sua capacidade de adaptação e por sua grande habilidade em diferentes áreas, desde a magia até a luta. Já os elfos são famosos por sua beleza e agilidade, além de possuírem habilidades mágicas impressionantes.
<br/><br/><br/>
Os orcs, por sua vez, são criaturas fortes e brutais, muitas vezes temidos por outras raças devido à sua reputação de serem guerreiros ferozes. Enquanto isso, os anões são conhecidos por sua habilidade em trabalhos manuais, como a forja, e por sua grande resistência física.
<br/><br/><br/>
As fadas são criaturas mágicas pequenas, ágeis e graciosas, que são muitas vezes consideradas como seres de grande beleza e encanto. Já os draconatos, são criaturas humanoides que possuem características de dragão, como escamas, asas e respiração de fogo. Eles são conhecidos por sua grande força e sabedoria.
<br/><br/><br/>
Além disso, também há os Tieflings, uma raça com traços demoníacos que muitas vezes são discriminados e marginalizados devido à sua aparência e à conexão com o mundo infernal. Eles possuem habilidades mágicas poderosas, como manipulação de fogo e sombras, e são muitas vezes temidos pelas outras raças devido à sua associação com o mal.
<br/><br/><br/>
Cada raça possui sua própria cultura, tradições e história, o que torna o mundo de fantasia dos sete reinos um lugar fascinante e diverso. Embora a guerra tenha dividido as raças, é importante lembrar que a diversidade é uma característica valiosa e que cada raça possui habilidades únicas e importantes para o mundo em que vivemos.</p>
        <Carrosel></Carrosel>
      </div>
      <Footer></Footer>
    </div>


  );

}

export default App;
