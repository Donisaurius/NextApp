import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoginForm from "../components/LoginForm";
import LoginImage from "../components/LoginImage";

function login() {
  return (
    <Container fluid className="vh-100 d-flex">
      <div className="row auth-inner m-0 w-100">
        <LoginImage />
        <LoginForm />
      </div>
    </Container>
  );
}

export default login;
