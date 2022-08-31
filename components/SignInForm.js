import { Button, Form } from "react-bootstrap";

export default function SignInForm({ formStyles }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div style={{ width: "451px" }}>
        <header
          style={{ width: "95%", margin: "1rem auto", fontSize: "0.9rem" }}
        >
          Usted esta ingresando por primera vez a este sistema, para continuar
          por favor ingrese la siguiente información:
        </header>
        <Form style={formStyles} className="login-super-admin-form">
          <Form.Group className="mb-3 w-75 mx-auto" controlId="nickName">
            <Form.Control className="border" type="email" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3 w-75 mx-auto" controlId="userName">
            <Form.Control className="border" type="email" placeholder="User" />
          </Form.Group>
          <Form.Group className="mb-3 w-75 mx-auto" controlId="password">
            <Form.Control
              className="border"
              type="email"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3 w-75 mx-auto" controlId="repeatPassword">
            <Form.Control
              className="border"
              type="password"
              placeholder="Repeat your password"
            />
          </Form.Group>
          <Button
            variant="primary"
            className="w-75 mx-auto"
            type="submit"
            id="btn-submit-superuser"
          >
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
}
