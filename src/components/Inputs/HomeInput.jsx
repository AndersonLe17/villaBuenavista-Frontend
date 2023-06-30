import { Form } from "react-bootstrap";

const HomeInput = ({type, placeholder, label, disabled = false}) => {
  return (
    <Form.Group className="form-booking">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
    </Form.Group>
  );
};

export default HomeInput;
