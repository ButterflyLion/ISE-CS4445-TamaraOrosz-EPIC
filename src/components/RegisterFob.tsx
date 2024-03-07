import { useState, useEffect } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { Container } from "react-bootstrap";

function RegisterFob() {
  const [state, setState] = useState({
    fName: "",
    lName: "",
    dob: "",
    language: "",
    otherLanguage: "",
    phoneNum: "",
    address1: "",
    address2: "",
    city: "",
    county: "",
    postcode: "",
    accessToComputer: "",
    file: "",
    tNcAccepted: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleTNCChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      tNcAccepted: event.target.checked,
    }));
  };

  const handleLanguageChange = (event) => {
    const { name, value } = event.target;
    if (value === "Other") {
      setState((prevLanguage) => ({
        ...prevLanguage,
        language: value,
        otherLanguage: "",
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
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

  // Uses this library: https://github.com/jackocnr/intl-tel-input/blob/master/README.md#initialisation-options
  // View Storybook for it here: https://intl-tel-input.com/storybook/?path=/docs/intltelinput--initialvalue
  useEffect(() => {
    const inputTel = document.querySelector<HTMLInputElement>("#phone");
    if (inputTel) {
      intlTelInput(inputTel, {
        utilsScript: "node_modules/intl-tel-input/build/js/utils.js",
        autoInsertDialCode: true,
        nationalMode: false,
        initialCountry: "ie",
      });
    }
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center container-narrow">
      <h1 className="containerTitle">Register your fob here</h1>
      <form
        className="needs-validation w-50"
        onSubmit={handleSubmit}
        noValidate
        id="applicationForm"
      >
        <div className="form-group">
          <div className="row">
            <div className="col">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="fName"
                className="form-control"
                id="inputFname"
                placeholder="Enter your first name"
                value={state.fName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lName"
                className="form-control"
                id="inputLname"
                placeholder="Enter your last name"
                value={state.lName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="form-control"
            id="dob"
            value={state.dob}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={state.address1}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address line 2</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            value={state.address2}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                value={state.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">County</label>
              <select
                id="inputState"
                className="form-control"
                value={state.county}
                onChange={handleInputChange}
              >
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Postcode</label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                value={state.postcode}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Preferred language</label>
          <select
            name="language"
            className="form-control selectpicker"
            id="language"
            value={state.language}
            onChange={handleLanguageChange}
          >
            <option value=" ">Select language</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>Other</option>
          </select>
          {state.language === "Other" && (
            <input
              name="otherLanguage"
              className="form-control"
              id="otherLanguage"
              value={state.otherLanguage}
              onChange={handleLanguageChange}
            />
          )}
        </div>

        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label">
              Do you have access to a computer?
            </legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value={state.accessToComputer}
                  required
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value={state.accessToComputer}
                  // onChange={}
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  No
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <pre>{state.accessToComputer}</pre>

        <div className="input-group">
          <label className="form-label">Phone number</label>
          <input
            type="tel"
            name="phoneNum"
            className="form-control"
            id="phone"
            value={state.phoneNum}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Upload document</label>
          <input
            type="file"
            className="form-control-file"
            value={state.file}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="tNcAccepted"
            checked={state.tNcAccepted}
            onChange={handleTNCChange}
            id="invalidCheck"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck">
            I have read and agree to the terms and conditions
          </label>
          <div className="invalid-feedback">You must agree to the T&Cs.</div>
        </div>

        <div className="form-group">
          <div className="col-xs-9 col-xs-offset-3">
            <button
              type="submit"
              className="btn btn-primary"
              name="signup"
              value="Sign up"
              disabled={!state.tNcAccepted}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
}
export default RegisterFob;
