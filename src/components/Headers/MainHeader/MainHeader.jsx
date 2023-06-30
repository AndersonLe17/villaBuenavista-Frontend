import { useState } from "react";
import { Button, Form, Image, Modal } from "react-bootstrap";
import logo from "../../../assets/img/logo.png";
import google from "../../../assets/img/google.png";
import HomeBanner from "./HomeBanner";
import NavHeader from "./NavHeader";
import { HomeDoubleInput, HomeInput } from "../../Inputs";

const MainHeader = () => {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChangeForm = () => setIsLogin(!isLogin);
  const handleFocus = (e) => {
    e.target.type = "date";
    e.target.showPicker();
  };
  const handleBlur = (e) => e.target.type = "text";
  return (
    <header>
      <NavHeader onPressLogin={handleShow} />
      <HomeBanner />

      <Modal
        show={show}
        onHide={handleClose}
        className="auth"
        fullscreen="md-down"
      >
        <Modal.Header closeButton={isLogin}>
          <Modal.Title className="d-flex justify-content-between w-100">
            {isLogin || (
              <a className="text-dark" onClick={handleChangeForm}>
                <i className="fa-regular fa-chevron-left"></i>
              </a>
            )}
            <Image src={logo} />
          </Modal.Title>
        </Modal.Header>
        {isLogin ? (
          <Modal.Body>
            <h4 className="mb-3 pe-5">Te damos la bienvenida nuevamente.</h4>
            <Form className="mb-5">
              <HomeInput
                type="text"
                label="Usuario o correo electronico"
                placeholder="Ingrese su usuario o su correo"
              />
              <HomeInput
                type="password"
                label="Contraseña"
                placeholder="Ingrese su contraseña"
              />
              <a className="fs-min text-dark">¿Olvidaste tu contraseña?</a>
              <Button variant="dark" className="w-100 rounded-pill mb-3">
                Inicia sesión
              </Button>
              <Button variant="outline-dark" className="w-100 rounded-pill">
                <Image src={google} className="text-start" />
                <span>Continuar con Google</span>
              </Button>
            </Form>
            <div className="d-flex align-items-center mb-4">
              <hr className="col-3 m-0" />
              <p className="col fs-min text-center">¿Aún no eres miembro?</p>
              <hr className="col-3 m-0" />
            </div>
            <Button
              variant="dark"
              className="w-100 rounded-pill"
              onClick={handleChangeForm}
            >
              Regístrate
            </Button>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <h4 className="mb-3 text-end ps-4">Únete para acceder a lo mejor de Villa Buenavista</h4>
            <Form className="mb-5">
              <HomeInput
                type="text"
                label="Nombres"
                placeholder="Ingrese su nombre"
              />
              <HomeDoubleInput 
                inputOne={{labelOne: "Apellido Paterno", placeholderOne: "Ingrese su apellido paterno"}}
                inputTwo={{labelTwo: "Apellido Materno", placeholderTwo: "Ingrese su apellido materno"}}
              />
              <HomeDoubleInput 
                inputOne={{labelOne: "Documento", typeOne: "select", placeholderOne: "Ingrese su documento", optionsOne: [{value: 1, text: "DNI"}, {value: 2, text: "CE"}]}}
                inputTwo={{labelTwo: "N° Documento", placeholderTwo: "Ingrese el N° de documento"}}
              />
              <HomeInput
                type="email"
                label="Correo Electronico"
                placeholder="Ingrese su correo electronico"
              />
              <HomeInput
                type="phone"
                label="Celular"
                placeholder="Ingrese su número de celular"
              />
              <HomeDoubleInput 
                inputOne={{labelOne: "Fecha de nacimiento", placeholderOne: "Ingrese su fecha de nacimiento", onFocusOne: handleFocus, onBlurOne: handleBlur}}
                inputTwo={{labelTwo: "Genero", typeTwo: "select", placeholderTwo: "Ingrese su genero", optionsTwo: [{value: 1, text: "Masculino"}, {value: 2, text: "Femenino"}, {value: 3, text: "Prefiero no decirlo"},]}}
              />
              <HomeInput
                type="password"
                label="Contraseña"
                placeholder="Crea una contraseña"
              />
              <Button variant="dark" className="w-100 rounded-pill mb-3">
                Unirse
              </Button>
              <Button variant="outline-dark" className="w-100 rounded-pill">
                <Image src={google} className="text-start" />
                <span>Continuar con Google</span>
              </Button>
            </Form>
            <div className="d-flex align-items-center mb-4">
              <hr className="col-3 m-0" />
              <p className="col fs-min text-center">¿Ya eres miembro?</p>
              <hr className="col-3 m-0" />
            </div>
            <Button
              variant="dark"
              className="w-100 rounded-pill"
              onClick={handleChangeForm}
            >
              Inicia Sesión
            </Button>
          </Modal.Body>
        )}
      </Modal>
    </header>
  );
};

export default MainHeader;
