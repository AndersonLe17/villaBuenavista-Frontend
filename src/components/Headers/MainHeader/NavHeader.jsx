import logo_title from "../../../assets/img/logo_title.png";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Image } from "react-bootstrap";

const NavHeader = ({ onPressLogin }) => {
  return (
    <Navbar className="border-bottom" expand={false} variant={null}>
      <Container fluid>
        <Navbar.Brand to={"/"}>
          <Image src={logo_title} className="d-none d-md-block" />
          <Image src={logo} className="d-block d-md-none" />
        </Navbar.Brand>
        <Nav className="ms-auto flex-row gap-4">
          <li className="nav-item">
            <Link className="item-link btn rounded-pill" to={"/booking"}>
              <i className="fa-light fa-bed-front"></i>
              <span className="d-none d-md-inline"> Reservar</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-dark rounded-pill px-4" onClick={onPressLogin}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="item-link btn rounded-pill" to={"/cart"}>
              <i className="fa-light fa-cart-shopping"></i>
              <span className="d-none d-md-inline"> Cart</span>
            </Link>
          </li>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
