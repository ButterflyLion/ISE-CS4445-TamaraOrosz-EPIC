import { useEffect, useState } from "react";
import { useUser } from "../features/auth/UserContext";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/Forms.css";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  tNcAccepted: false,
};

function Signup() {
  const { generateUserId, login } = useUser();
  const [state, setState] = useState(initialState);
  const [result, setResult] = useState("");

  const handleSignup = async (event: any) => {
    event?.preventDefault();
    console.log("Submitting form...");

    try {
      const userId = generateUserId(state.email, state.password);
      const response = await axios.put(
        `${process.env.VITE_BACKEND_WEB_APP_BASE_URL}/register-user`,
        JSON.stringify({
          userId: userId,
          fName: state.fName,
          lName: state.lName,
          email: state.email,
          password: state.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setResult("Account created successfully.");
      if (response.data.created == `Put user ${state.fName}`) {
        const userData = {
          userId: userId,
          email: state.email,
          fName: state.fName,
          lName: state.lName,
          userRole: response.data.userRole,
        };
        login(userData);
      }
      setResult("Logged in successfully.");
      console.log(result);
    } catch (error) {
      console.error(error);
      setResult("There was an error creating your account.");
    }
  };

  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");

    Array.prototype.forEach.call(forms, (form) => {
      form.addEventListener(
        "submit",
        (event: any) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center container-narrow">
      <img alt="logo" src="/FestiFob-logo.svg" width="60px" />
      <h1>Create an account</h1>
      <p>Enter your name and email address to create a new account.</p>
      <Form
        className="needs-validation w-md-50"
        onSubmit={handleSignup}
        noValidate
        id="signup-form"
      >
        <Form.Group>
          <Form.Label className="form-label">First name</Form.Label>
          <Form.Control
            type="text"
            name="fName"
            id="inputFirstName"
            className="form-control"
            placeholder="Enter first name"
            value={state.fName}
            onChange={(e) => setState({ ...state, fName: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="form-label">Last name</Form.Label>
          <Form.Control
            type="text"
            name="lName"
            className="form-control"
            placeholder="Enter last name"
            value={state.lName}
            onChange={(e) => setState({ ...state, lName: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="validationEmailAddress" className="form-label">
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            className="form-control"
            id="validationEmailAddress"
            placeholder="Enter email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            required
          />
          <div className="invalid-feedback">
            Please provide a valid email address.
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="validationPassword" className="form-label">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            name="password"
            className="form-control"
            id="validationPassword"
            placeholder="Enter password"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
            required
          />
          <div className="d-flex flex-column mb-3">
            <div className="invalid-feedback">
              Please provide a strong password.
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            name="tNcAccepted"
            id="invalidCheck"
            label="Agree to terms and conditions"
            value=""
            onChange={() =>
              setState({ ...state, tNcAccepted: !state.tNcAccepted })
            }
            required
          />
          <div className="invalid-feedback">You must agree to the T&Cs.</div>
        </Form.Group>

        <Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="btn btn-primary"
            disabled={!state.tNcAccepted}
          >
            Sign Up
          </Button>
          <p>
            Already have an account? <a href="/login">Log in here</a>
          </p>
        </Form.Group>
      </Form>
    </Container>
  );
}
export default Signup;
