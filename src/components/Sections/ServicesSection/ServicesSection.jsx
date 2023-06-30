import poolImg from "../../../assets/img/piscina.png";
import wifiImg from "../../../assets/img/router-de-wifi.png";
import garajeImg from "../../../assets/img/garaje.png";
import petImg from "../../../assets/img/mascota.png";
import natureImg from "../../../assets/img/naturaleza.png";
import ruteImg from "../../../assets/img/la-carretera.png";
import patchImg from "../../../assets/img/verduras.png";
import parkImg from "../../../assets/img/parque.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ServiceCard from "./ServiceCard";
import { Container } from "react-bootstrap";

const items = [
  {
    itemImg: poolImg,
    title: "Piscina",
    text: "Relájate y refréscate en nuestra piscina, el lugar perfecto para disfrutar de momentos inolvidables",
  },
  {
    itemImg: wifiImg,
    title: "Wifi",
    text: "Conéctate sin límites y disfruta de una conexión rápida y confiable con nuestro servicio WiFi premium",
  },
  {
    itemImg: garajeImg,
    title: "Cochera",
    text: "Guarda tu vehículo con total seguridad y tranquilidad en nuestra conveniente y resguardada cochera privada",
  },
  {
    itemImg: petImg,
    title: "Pet friendly",
    text: "Aceptamos a tus adorables compañeros peludos, asegurando que toda tu familia disfrute de su estancia",
  },
  {
    itemImg: natureImg,
    title: "Naturaleza",
    text: "Disfruta de vistas impresionantes a la naturaleza que te cautivarán y te conectarán con la tranquilidad",
  },
  {
    itemImg: ruteImg,
    title: "Ruta Directa",
    text: "Llega fácilmente a nuestro hospedaje con nuestra ruta directa, sin complicaciones ni desvíos innecesarios",
  },
  {
    itemImg: patchImg,
    title: "Huerto",
    text: "Explora nuestro exuberante huerto y déjate cautivar por la belleza natural que florece a tu alrededor",
  },
  {
    itemImg: parkImg,
    title: "Parque",
    text: "Deja que tus pequeños se sumerjan en la diversión en nuestro parque de juegos infantiles inigualable",
  },
];

const ServicesSection = () => {
  return (
    <Container className="services" fluid>
      <div className="services-head text-center">
        <h2 className="mb-3">Nuestros Servicios</h2>
        <p>
          Como hospedaje, ofrecemos una variedad de comodidades diseñados para
          hacer que su estancia sea lo más cómoda y agradable posible.
        </p>
      </div>
      <div className="services-cards">
        <OwlCarousel className="owl-theme" center loop autoWidth>
          {items.map((item) => (
            <ServiceCard
              itemImg={item.itemImg}
              title={item.title}
              text={item.text}
              key={item.title}
            />
          ))}
        </OwlCarousel>
      </div>
    </Container>
  );
};

export default ServicesSection;
