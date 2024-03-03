import {Navbar, Nav, Container} from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
    <Navbar collapseOnSelect fixed='top' expand="sm" bg="dark" variant="dark">
        <Container>
            {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
}

export default Navigation;