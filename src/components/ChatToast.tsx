import { useState } from "react";
import { ToastContainer, Toast } from "react-bootstrap";
import { Button } from "@mui/material";

function ChatToast() {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
      <Toast onClose={toggleShow} show={show}>
        <Toast.Header>
          <img
            src="/FestiFob-logo.svg"
            width="40px"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">FestiFob Customer Support</strong>
          <small>{`${hours}:${formattedMinutes}`}</small>
        </Toast.Header>
        <Toast.Body>
          Hi there! How can we help you today?
          <Button
            href="/chat"
            style={{ backgroundColor: "pink", color: "black", margin: "10px" }}
          >
            Chat with us
          </Button>
          <Button onClick={toggleShow} style={{ color: "pink", margin: "10px" }}>Not now</Button>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ChatToast;
