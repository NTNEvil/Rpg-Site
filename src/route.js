import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './App'
import Guild from './guild';
import User from './user';
import Friends from './friends';
import Monsters from './Monsters';

function App() {
  

return(
  // rotas
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guild" element={<Guild />} />
      <Route path="/User" element={<User />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/monsters" element={<Monsters />} />
    </Routes>
  </Router>
)
}


export default App;