import './App.css';
import Map from './map.png'
import mySound from './music.mp3'
import ReactAudioPlayer from 'react-audio-player';

import Nav from './components/nav';

function App() {


  return (
    
    <div className="App">



<iframe src={mySound} allow="autoplay" id="iframeAudio">
</iframe> 
      <h2 className='Login'>Log In</h2>
      <Nav></Nav>
      <main className='Canvas'><div className='Fade'></div><img src={Map} className='Map'/></main>

      <div className='light'></div>
      <div className='light2'></div>
      <h1 className='title'>🔮 Earth of Dungeons 🔮</h1>
    </div>
  );
}

export default App;
