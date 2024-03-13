import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
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

  const handleRatingChange = (event: any) => {
    setRating(parseFloat(event.target.value));
  };

  const handleSubmit = () => {
    console.log("Rating submitted: ", rating);
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
          <Modal.Title>Rate Our Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please rate our service</p>
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
