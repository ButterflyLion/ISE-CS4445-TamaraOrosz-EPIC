import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/auth/UserContext";
import { CDBIcon } from "cdbreact";
import { Navbar, Nav, Button, Modal } from "react-bootstrap";

const LogOut = (props: any) => {
  const navigate = useNavigate();
  const { logout } = useUser();

  const handleLogout = () => {
    console.log("Logging out...");
    logout();
    props.handleClose();
    navigate("/");
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to log out of your account?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Navigation = () => {
  const { user } = useUser();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            {user && user.userRole === "admin" && <Nav.Link href="/admin-view">Admin View</Nav.Link>}
            {user && user.userRole === "regular user" && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
            {user && <Nav.Link href="/news">News</Nav.Link>}
            {user && user.userRole === "regular user" && <Nav.Link href="/register-fob">Register Fob</Nav.Link>}
            {!user && <Nav.Link href="/login">
              <CDBIcon className="me-2" icon="user" />
              Log In
            </Nav.Link>}
            {!user && <Nav.Link href="/signup">Sign Up</Nav.Link>}
            {user && <Button variant="primary" onClick={handleShow}>
              Log out
            </Button>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LogOut show={show} handleClose={handleClose} />
    </div>
  );
};

export default Navigation;
