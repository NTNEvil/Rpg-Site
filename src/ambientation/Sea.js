import mySound from './Sea.mp3'
import sound from './scream.mp3'
import Nav from '../components/nav';
import Login from '../components/Login';
import SideMenu from '../components/sidemenu';
function Sea() {

    setTimeout(() => {
        new Audio(sound).play();
        document.querySelector('.inputs').style.opacity = '1'
    }, 20000);
    return ( 

        <div className="Sea">
                                <div className='inputs'> <Nav></Nav>
                    <Login></Login>
                    <SideMenu></SideMenu></div>
            <img src="https://cdn.discordapp.com/attachments/1077441049024282756/1077740362325561394/Momessito_Sea_Monstersea_monster_Attacking_ship_blue_monster_b8fe0721-6505-4167-951c-97c2c92255c3.png" style={{width : '100%'}}/>
            <iframe src={mySound} allow="autoplay" id="iframeAudio">
      </iframe>
      <div className='eye' onClick={()=>{alert('Parabens voce descobriu um segredo diga a senha: no olho do monstro para o ADM Momesso para receber sua recompensa')}}></div>
        <div className="Titles">
            <h1 style={{textAlign : 'center', color : '#40A5C2'}}>Tritanius</h1>
        </div>
        </div>
     );
}

export default Sea;