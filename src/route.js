import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './App'
import Guild from './guild';
import User from './user';
import Friends from './friends';
import Monsters from './Monsters';
import Shop from './Shop';
import Missions from './missions';
import Roleta from './roleta';
import Cards from './cards';
function App() {
  

return(
  // rotas
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guild" element={<Guild />} />
      <Route path="/User" element={<User />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/monsters" element={<Monsters />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/roleta" element={<Roleta />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/cards" element={<Cards />} />
    </Routes>
  </Router>
)
}


export default App;