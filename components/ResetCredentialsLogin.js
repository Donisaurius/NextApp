import { Button, Form } from "react-bootstrap";

export default function ResetCredentialsLogin({
  title,
  innerTitle,
  formStyles,
}) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div style={{ width: "451px" }}>
        {title && (
          <header
            style={{ width: "95%", margin: "1rem auto", fontSize: "0.9rem" }}
          >
            {title}
          </header>
        )}
        <Form onSubmit={(e) => e.preventDefault()} style={formStyles}>
          {innerTitle && (
            <legend style={{ fontSize: ".9rem" }} className="w-75 mx-auto">
              {innerTitle}
            </legend>
          )}
          <Form.Group className="mb-3 w-75 mx-auto" controlId="email">
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="border"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-75 mx-auto"
            id="btnSubmit"
          >
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
}
