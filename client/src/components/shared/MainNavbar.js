import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            Learn LMS
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse>
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to='/'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/courses'>
                Courses
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/users'>
                Users
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

export default MainNavbar;