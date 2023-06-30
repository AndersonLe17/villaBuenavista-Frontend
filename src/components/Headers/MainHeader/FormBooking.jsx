import { Button, Form } from "react-bootstrap";
import { HomeDoubleInput, HomeInput } from "../../Inputs";

const FormBooking = () => {
  const handleFocus = (e) => {
    e.target.type = "date";
    e.target.showPicker();
  };

  const handleBlur = (e) => {
    e.target.type = "text";
  };

  return (
    <Form>
      <HomeInput
        type="text"
        placeholder="Selecciona una de nuestras sedes (PRONTO)"
        label="Ubicación"
        disabled={true}
      />
      <HomeDoubleInput
        inputOne={{
          labelOne: "Llegada",
          placeholderOne: "Agregar una fecha",
          onFocusOne: handleFocus,
          onBlurOne: handleBlur,
        }}
        inputTwo={{
          labelTwo: "Salida",
          placeholderTwo: "Agregar una fecha",
          onFocusTwo: handleFocus,
          onBlurTwo: handleBlur,
        }}
      />

      <HomeDoubleInput
        inputOne={{
          labelOne: "Adultos",
          typeOne: "number",
          placeholderOne: "Cant. Adultos",
          minOne: 1,
        }}
        inputTwo={{
          labelTwo: "Niños",
          typeTwo: "number",
          placeholderTwo: "Cant. Niños",
          minTwo: 0,
        }}
      />

      <div>
        <Button variant="process" className="w-100">
          Buscar
        </Button>
      </div>
    </Form>
  );
};

export default FormBooking;
