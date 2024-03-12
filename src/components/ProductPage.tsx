import {
  CDBCarousel,
  CDBCarouselItem,
  CDBCarouselInner,
  CDBView,
} from "cdbreact";
import { Container, Stack } from "react-bootstrap";
import "../styles/Pages.css";

function ProductPage() {
  return (
    <Container className="page-top">
      <Stack className="justify-content-md-center" direction="horizontal" gap={3}>
        <div className="p-5">
          <CDBCarousel
            activeItem={1}
            length={5}
            showControls={true}
            showIndicators={true}
            className="w-100"
            slide
          >
            <CDBCarouselInner>
              <CDBCarouselItem itemId="1">
                <CDBView>
                  <img
                    className="d-block w-100"
                    src="/slides/Front-right.png"
                    alt="First slide"
                  />
                </CDBView>
              </CDBCarouselItem>
              <CDBCarouselItem itemId="2">
                <CDBView>
                  <img
                    className="d-block w-100"
                    src="/slides/Front-top.png"
                    alt="Second slide"
                  />
                </CDBView>
              </CDBCarouselItem>
              <CDBCarouselItem itemId="3">
                <CDBView>
                  <img
                    className="d-block w-100"
                    src="/slides/Back-top.png"
                    alt="Third slide"
                  />
                </CDBView>
              </CDBCarouselItem>
              <CDBCarouselItem itemId="4">
                <CDBView>
                  <img
                    className="d-block w-100"
                    src="/slides/Top-back.png"
                    alt="Third slide"
                  />
                </CDBView>
              </CDBCarouselItem>
              <CDBCarouselItem itemId="5">
                <CDBView>
                  <img
                    className="d-block w-100"
                    src="/slides/Left-back.png"
                    alt="Third slide"
                  />
                </CDBView>
              </CDBCarouselItem>
            </CDBCarouselInner>
          </CDBCarousel>
        </div>
        <div className="p-5">
          <h1>FestiFob</h1>
        </div>
      </Stack>
    </Container>
  );
}

export default ProductPage;
