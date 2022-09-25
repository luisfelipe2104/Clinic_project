import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from "react"

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import PoliticasDeDados from './pages/PolíticasDeDados';
import ConsultasMedico from "./pages/ConsultasMedico";
import Agendamento from "./pages/Agendamento";


function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">

      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login user={user} setUser={setUser} />} />
              <Route path='/cadastrar' element={<Cadastrar />} />
              <Route path='/lei-geral-de-protecao-de-dados' element={<PoliticasDeDados />} />
              <Route path='/consulta-medico' element={<ConsultasMedico user={user}/>} />
              <Route path='/marcar-consulta' element={<Agendamento user={user} />} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
