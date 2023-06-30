import logo from "../../assets/img/logo_title.png";

const HomeFooter = () => {
  return (
    <footer className="container-fluid footer">
      <div className="row">
        <div className="col-md-8 col-xl-4 footer-info">
          <img src={logo} alt="logo" className="img-fluid" />
          <div className="footer-reels">
            <p>
              Villa Buenavista: Tu santuario de encanto y serenidad en
              Lunahuaná, Perú. Sumérgete en la belleza natural, disfruta de
              vistas panorámicas y crea recuerdos inolvidables.
            </p>
            <div className="d-flex gap-4">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xl-2 footer-menu">
          <h4>Menú</h4>
          <ul>
            <li>Inicio</li>
            <li>Servicios</li>
            <li>Nosotros</li>
            <li>Contáctanos</li>
            <li>Iniciar Sesión</li>
          </ul>
        </div>
        <div className="col-md-8 col-xl-4 footer-contact">
          <h4>Contáctanos</h4>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i> (+51) 949 158 904
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>{" "}
              villabuenavista@hotmail.com
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i> Carr. Cañete Yauyos
              260, Lunahuaná
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-xl-2 footer-pay">
          <h4>Medios de Pago</h4>
          <div className="d-flex justify-content-xl-center gap-3">
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-paypal"></i>
          </div>
        </div>
      </div>
      <div className="row footer-copy justify-content-end">
        <p className="col col-xl-8 border-top text-center text-xl-end">
          © Copyrigth 2023 Villa Buenavista
        </p>
      </div>
    </footer>
  );
};

export default HomeFooter;
