import { useState } from "react";
import { useUser } from "../features/auth/UserContext";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/Forms.css";

function Login() {
  const { login, generateUserId } = useUser();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [result, setResult] = useState("");

  const handleLogin = async (event: any) => {
    event?.preventDefault();
    console.log("Logging in...");

    try {
      const userId = generateUserId(state.email, state.password);
      const response = await axios.post(
        `${process.env.VITE_BACKEND_BASE_URL}/login`,
        JSON.stringify({
          userId: userId,
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
      if (response.data.found == true && response.data.matches == true) {
        const userData = {
          userId: userId,
          email: state.email,
          fName: response.data.fName,
          lName: response.data.lName,
          userRole: response.data.userRole,
        };
        login(userData);
      }
      setResult("Logged in successfully.");
    } catch (error) {
      console.error(error);
      setResult("There was an error logging in.");
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center container-narrow">
      <img alt="logo" src="FestiFob-logo.svg" width="60px" />
      <h1>Login</h1>
      <p>Enter your email address and password to log in.</p>
      <Form
        className="w-md-50"
        onSubmit={handleLogin}
        noValidate
        id="login-form"
      >
        <Form.Group>
          <Form.Label className="form-label">
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="form-label">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={state.password}
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
            }}
            required
          />
        </Form.Group>

        <Form.Group className="d-flex flex-column">
          <a href="/forgot-password" className="mb-3">
            Forgot password?
          </a>
          <Button type="submit" className="btn btn-primary">
            Sign In
          </Button>
          <p>
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </Form.Group>
      </Form>
    </Container>
  );
}
export default Login;
