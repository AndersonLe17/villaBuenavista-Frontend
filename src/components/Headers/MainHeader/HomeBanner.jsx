import { Button, Card, Container, Form, Image } from "react-bootstrap";
import habitacion_banner from "../../../assets/img/habitacion_banner.png";
import FormBooking from "./FormBooking";

const HomeBanner = () => {
  return (
    <Container className="banner" fluid>
      <div className="banner-content">
        <div className="banner-img">
          <Image src={habitacion_banner} className="rounded-4" />
        </div>
        <div className="banner-booking">
          <Card>
            <Card.Body>
              <Card.Title className="lh-sm">
                Encuentra la habitación ideal para ti
              </Card.Title>
              <p className="fs-min mb-4 lh-base">
                Descubre en Villa Buenavista el refugio perfecto para hospedarte
                y disfrutar de una experiencia única y placentera.
              </p>

              <FormBooking/>
              
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default HomeBanner;
