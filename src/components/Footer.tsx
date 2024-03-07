import { CDBBox, CDBBtn, CDBIcon } from "cdbreact";

function Footer() {
  return (
    <footer className="footer">
      <div className="shadow">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-dark">
                <img alt="logo" src="/FestiFob-logo.svg" width="40px" />
                <span
                  className="ms-3 h5 font-weight-bold"
                  style={{ color: "white" }}
                >
                  FestiFob
                </span>
              </a>
              <p className="my-3" style={{ width: "250px", textAlign: "left" }}>
                Helping you stay safe during festival season.
              </p>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                FestiFob
              </p>
              <CDBBox
                flex="column"
                display="flex"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <a href="/">Resources</a>
                <a href="/about">About</a>
                <a href="/">Contact</a>
                <a href="/news">News</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Help
              </p>
              <CDBBox
                display="flex"
                flex="column"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <a href="/">FAQ & Support</a>
                <a href="/signup">Sign Up</a>
                <a href="/login">Log In</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Products
              </p>
              <CDBBox
                display="flex"
                flex="column"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <a href="/">Fob</a>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ width: "100%" }}
            className="mx-auto mt-4"
          >
            <small className="text-center" style={{ width: "50%" }}>
              &copy; Tamara Orosz, 2024. All rights reserved.
            </small>
            <CDBBtn flat color="light" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="light" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="light" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </div>
    </footer>
  );
}
export default Footer;
