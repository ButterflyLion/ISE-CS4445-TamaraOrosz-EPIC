import { CDBIcon } from "cdbreact";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/FestiFob-logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            FestiFob
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/login"><CDBIcon className="me-2" icon="user" />Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
