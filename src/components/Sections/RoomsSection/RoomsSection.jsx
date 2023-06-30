import habitacionImg from "../../../assets/img/habitacion_banner.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import RoomCard from "./RoomCard";
import { Container } from "react-bootstrap";

const RoomsSection = () => {
  return (
    <Container className="rooms" fluid>
      <div className="rooms-head text-center">
        <h2>Nuestras Habitaciones</h2>
      </div>
      <div className="rooms-cards">
        <OwlCarousel className="owl-theme" center loop autoWidth>
          <RoomCard roomImg={habitacionImg} title={"Habitación Matrimonial"} price={125.00}/>
          <RoomCard roomImg={habitacionImg} title={"Habitación Matrimonial"} price={125.00}/>
          <RoomCard roomImg={habitacionImg} title={"Habitación Matrimonial"} price={125.00}/>
          <RoomCard roomImg={habitacionImg} title={"Habitación Matrimonial"} price={125.00}/>
        </OwlCarousel>
      </div>
    </Container>
  );
};

export default RoomsSection;
