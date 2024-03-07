import { useState } from "react";

function Signup() {
  const [state, setState] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    tNcAccepted: "",
  });

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form");
  };

  (() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    Array.prototype.forEach.call(forms, (form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  return (
    <>
      <div className="container">
        <h1>Sign up</h1>
        <form
          className="needs-validation"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="form-group">
            <label className="form-label">First name</label>
            <input
              type="text"
              name="fName"
              className="form-control"
              placeholder="Enter first name"
              value={state.fName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Last name</label>
            <input
              type="text"
              name="lName"
              className="form-control"
              placeholder="Enter last name"
              value={state.lName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="validationEmailAddress" className="form-label">
              Email address
            </label>
            <input
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
          </div>
          <div className="form-group">
            <label htmlFor="validationPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="validationPassword"
              placeholder="Enter password"
              value={state.password}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">
              Please provide a strong password.
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">You must agree to the T&Cs.</div>
          </div>
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    </>
  );
}
export default Signup;
