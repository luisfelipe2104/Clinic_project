import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import PoliticasDeDados from './pages/PolíticasDeDados';
import ConsultasMedico from "./pages/ConsultasMedico";



function App() {
  return (
    <div className="App">

      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cadastrar' element={<Cadastrar />} />
              <Route path='/lei-geral-de-protecao-de-dados' element={<PoliticasDeDados />} />
              <Route path='/consulta-medico' element={<ConsultasMedico/>} />
          </Routes>
      </Router>



      {/* <Login/> */}
      {/* <Cadastrar/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
