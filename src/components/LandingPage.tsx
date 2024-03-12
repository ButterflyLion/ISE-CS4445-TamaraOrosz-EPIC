import { Stack, Image, Button, Container } from "react-bootstrap";
import "../styles/Pages.css";

function LandingPage() {
  return (
    <Container className="page-top">
        <Stack
          className="justify-content-md-center"
          direction="horizontal"
          gap={3}
        >
          <div className="p-5">
            <h1>FestiFob</h1>
            <h3>The ultimate festival companion</h3>
            <p>Helping you avoid festival fatigue one decision at a time.</p>
            <Button href="/buy" variant="primary">
              Buy now
            </Button>
          </div>
          <div>
            <Image
              src="/Fob-landing-page.png"
              style={{
                width: "100%",
                height: "60vh",
                objectFit: "cover",
                padding: "0",
              }}
            />
          </div>
        </Stack>
    </Container>
  );
}

export default LandingPage;
