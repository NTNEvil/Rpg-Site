import './App.css';
import Map from './map.png'
import mySound from './music.mp3'
import ReactAudioPlayer from 'react-audio-player';

import Nav from './components/nav';

function App() {


  return (
    
    <div className="App">


      <h2 className='Login'>Log In</h2>
      <Nav></Nav>
      <img src={Map} className='Map'/>
      <div className='light'></div>
      <h1 className='title'>🔮 Earth of Dungeons 🔮</h1>
      <ReactAudioPlayer className='music'
  src={mySound}
  autoPlay={true}
  loop={true}
  controls={true}
  volume={0.1}
/>
    </div>
  );
}

export default App;
