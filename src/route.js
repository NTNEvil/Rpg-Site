import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './App'
import Guild from './guild';
import User from './user';


function App() {
  

return(
  // rotas
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guild" element={<Guild />} />
      <Route path="/User" element={<User />} />
    </Routes>
  </Router>
)
}


export default App;