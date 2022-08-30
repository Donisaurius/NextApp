import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LoginForm() {
  return (
    <div className="d-flex align-items-center auth-bg px-2 p-lg-5 col-lg-4">
      <div className="px-xl-2 mx-auto col-sm-8 col-md-6 col-lg-12">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="border"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="border"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 btn-login">
            Submit
          </Button>
        </Form>
      </div>
      <style jsx>{`
        .btn-login:hover {
          box-shadow: red;
        }
      `}</style>
    </div>
  );
}
