import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
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
  const [state, setState] = useState(initialState);
  const [result, setResult] = useState("");

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event?.preventDefault();
    console.log("Submitting form...");

    try {
      const userId = uuidv4();
      const response = await axios.put(
        "https://zz3sq37nl4.execute-api.us-east-1.amazonaws.com/dev/register-user",
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
        onSubmit={handleSubmit}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={() => setState({ ...state, tNcAccepted: !state.tNcAccepted })}
            required
          />
          <div className="invalid-feedback">You must agree to the T&Cs.</div>
        </Form.Group>

        <Form.Group>
          <Button type="submit" variant="primary" className="btn btn-primary" disabled={!state.tNcAccepted}>
            Sign Up
          </Button>
          <p>
            Already have an account? <a href="/login">Log in here</a>
          </p>
        </Form.Group>
      </Form>
      <p>{result}</p>
    </Container>
  );
}
export default Signup;
