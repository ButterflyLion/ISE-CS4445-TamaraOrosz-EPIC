import { useState, useEffect } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { Button, Container, Form } from "react-bootstrap";

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

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleTNCChange = (event: any) => {
    setState((prevState) => ({
      ...prevState,
      tNcAccepted: event.target.checked,
    }));
  };

  const handleLanguageChange = (event: any) => {
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Submitting form");
  };

  (() => {
    "use strict";

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
      <Form
        className="needs-validation w-50"
        onSubmit={handleSubmit}
        noValidate
        id="applicationForm"
      >
        <Form.Group>
          <div className="row">
            <div className="col">
              <Form.Label className="form-label">First Name</Form.Label>
              <Form.Control
                type="text"
                name="fName"
                id="inputFname"
                placeholder="Enter your first name"
                value={state.fName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col">
              <Form.Label className="form-label">Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lName"
                id="inputLname"
                placeholder="Enter your last name"
                value={state.lName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label className="form-label">Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            id="dob"
            value={state.dob}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="inputAddress">Address</Form.Label>
          <Form.Control
            type="text"
            id="inputAddress"
            placeholder="1234 Main St"
            value={state.address1}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="inputAddress2">Address line 2</Form.Label>
          <Form.Control
            type="text"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            value={state.address2}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <div className="row">
            <div className="form-group col-md-6">
              <Form.Label htmlFor="inputCity">City</Form.Label>
              <Form.Control
                type="text"
                id="inputCity"
                value={state.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-md-4">
              <Form.Label htmlFor="inputState">County</Form.Label>
              <Form.Select
                id="inputState"
                className="form-control"
                value={state.county}
                onChange={handleInputChange}
              >
                <option selected>Choose...</option>
                <option>...</option>
              </Form.Select>
            </div>
            <div className="form-group col-md-2">
              <Form.Label htmlFor="inputZip">Postcode</Form.Label>
              <Form.Control
                type="text"
                id="inputZip"
                value={state.postcode}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label className="form-label">Preferred language</Form.Label>
          <Form.Select
            name="language"
            id="language"
            value={state.language}
            onChange={handleLanguageChange}
          >
            <option value=" ">Select language</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>Other</option>
          </Form.Select>
          {state.language === "Other" && (
            <Form.Control
              name="otherLanguage"
              id="otherLanguage"
              value={state.otherLanguage}
              onChange={handleLanguageChange}
              placeholder="Enter your preferred language"
            />
          )}
        </Form.Group>

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
                <Form.Label className="form-check-label" htmlFor="gridRadios1">
                  Yes
                </Form.Label>
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
                <Form.Label className="form-check-label" htmlFor="gridRadios2">
                  No
                </Form.Label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="input-group">
          <Form.Label className="form-label">Phone number</Form.Label>
          <Form.Control
            type="tel"
            name="phoneNum"
            id="phone"
            value={state.phoneNum}
            onChange={handleInputChange}
            required
          />
        </div>

        <Form.Group>
          <Form.Label className="form-label">Upload document</Form.Label>
          <Form.Control
            type="file"
            value={state.file}
            onChange={handleInputChange}
          />
        </Form.Group>

        <div className="form-check form-check-inline">
          <Form.Check
            type="checkbox"
            name="tNcAccepted"
            checked={state.tNcAccepted}
            onChange={handleTNCChange}
            id="invalidCheck"
            label="I have read and agree to the terms and conditions"
            required
          />
          <div className="invalid-feedback">You must agree to the T&Cs.</div>
        </div>

        <Form.Group>
          <div className="col-xs-9 col-xs-offset-3">
            <Button
              type="submit"
              variant="primary"
              name="signup"
              value="Sign up"
              disabled={!state.tNcAccepted}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Form.Group>
      </Form>
    </Container>
  );
}
export default RegisterFob;
