import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import './index.css';

function index() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <section class="container">
          <section class="brand">
            <Navbar.Brand href="#home">
              <div class="brandItem">
                <h1>Clínica Médica</h1>
                <h2>Exames & Diagnósticos</h2>
              </div>
            </Navbar.Brand>
          </section>
          
          
            <Navbar.Collapse id="basic-navbar-nav">
              <div class="extend"><Navbar.Toggle aria-controls="basic-navbar-nav" /></div>

              //NAO MEXER NA RESPONSIVIDADE!!! POIS ELA TA TODA RUIM, E PODE PIORAR KAKAKAKA

              <section class="navbar">
                <Nav className="me-auto">
                  <Nav.Link  href="#home"><div class="nav-item">Sobre</div></Nav.Link>
                  <Nav.Link href="#link"><div class="nav-item">Contato</div></Nav.Link>
                  <NavDropdown title="Políticas de Dados" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Lei geral de proteção de dados
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Leis de proteção de dados
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      algo a mais
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Perfil" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Criar conta
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </section>
            </Navbar.Collapse>
          
        </section>
      </Container>
    </Navbar>
  );
}

export default index;
