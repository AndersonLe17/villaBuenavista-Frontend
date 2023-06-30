import { Form } from "react-bootstrap";

const HomeDoubleInput = ({ inputOne, inputTwo }) => {
  const { labelOne, typeOne = "text", placeholderOne, onFocusOne, onBlurOne, minOne, optionsOne = [] } = inputOne;
  const { labelTwo, typeTwo = "text", placeholderTwo, onFocusTwo, onBlurTwo, minTwo, optionsTwo = [] } = inputTwo;
  return (
    <Form.Group className="form-booking d-flex">
      <div className="col">
        <Form.Label>{labelOne}</Form.Label>
        {typeOne !== "select" ? (
          <Form.Control
            type={typeOne}
            placeholder={placeholderOne}
            onFocus={onFocusOne}
            onBlur={onBlurOne}
            min={minOne}
          />
        ) : (
          <Form.Select value="" onChange={() => {}} required>
            <option disabled value="">
              {placeholderOne}
            </option>
            {optionsOne.map((opt) => (
              <option value={opt.value} key={opt.value}>
                {opt.text}
              </option>
            ))}
          </Form.Select>
        )}
      </div>
      <div className="vr mx-2"></div>
      <div className="col">
        <Form.Label>{labelTwo}</Form.Label>
        {typeTwo !== "select" ? (
          <Form.Control
            type={typeTwo}
            placeholder={placeholderTwo}
            onFocus={onFocusTwo}
            onBlur={onBlurTwo}
            min={minTwo}
          />
        ) : (
          <Form.Select value="" onChange={() => {}} required>
            <option disabled value="">
              {placeholderTwo}
            </option>
            {optionsTwo.map((opt) => (
              <option value={opt.value} key={opt.value}>
                {opt.text}
              </option>
            ))}
          </Form.Select>
        )}
      </div>
    </Form.Group>
  );
};

export default HomeDoubleInput;
