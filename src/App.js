import './App.scss';
import { Navbar, Container } from "react-bootstrap";
const App = () => (
  <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src="./paytronix-logo-default.png" width="auto" height="50px" className="d-inline-block align-top"/>
          {' '}
          <div className = "px-nav-header-text">FE Hands On Test</div>
        </Navbar.Brand>
        
      </Container>
    </Navbar>
    <Container fluid>
      {/* Replace the following div with your code/container/component */}
      <div className = "px-add-components-here-area">
          Add your components here
      </div>
    </Container>
  </>
);

export default App;
