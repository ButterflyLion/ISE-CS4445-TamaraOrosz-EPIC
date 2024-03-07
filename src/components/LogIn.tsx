import { useState } from "react";
import { Container } from "react-bootstrap";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <Container className="d-flex flex-column align-items-center container-narrow">
      <img alt="logo" src="FestiFob-logo.svg" width="60px" />
      <h1>Login</h1>
      <p>Enter your email address and password to log in.</p>
      <form className="w-md-50" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={state.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={state.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="d-flex flex-column">
          <a href="/forgot-password" className="mb-3">
            Forgot password?
          </a>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
          <p>
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </div>
      </form>
    </Container>
  );
}
export default Login;
