import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Rating, Box } from "@mui/material";

export const ChatRatingModal = ({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number) => void;
}) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRatingChange = (event: any) => {
    setRating(parseFloat(event.target.value));
  };

  const handleFeedbackChange = (event: any) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Rating submitted: ", rating);
    console.log("Feedback submitted: ", feedback);
    onSubmit(rating);
    onClose();
  };

  const labels: { [index: string]: string } = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Feedback Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <p>Rate Our Service</p>
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  value={rating}
                  onChange={handleRatingChange}
                  precision={0.5}
                  getLabelText={getLabelText}
                />
              </Box>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Where can we improve?</Form.Label>
              <Form.Control as="textarea" rows={3} value={feedback} onChange={handleFeedbackChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
