import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getCryptPassword } from "../utils/getCryptPassword";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

export default function LoginForm({ styles }) {
  const router = useRouter();

  /*   useEffect(() => {
    if (localStorage.getItem("prueba")) {
      const userCredentials = JSON.parse(localStorage.getItem("prueba"));

      if (userCredentials.rememberMe) {
        router.push("/");
      }
    }
  }, []); */

  const handleSubmit = (e) => {
    e.preventDefault();
    const userCredentials = { email, password, rememberMe };

    userCredentials.email = e.target.querySelector("#email").value;
    userCredentials.password = e.target.querySelector("#password").value;
    userCredentials.rememberMe = e.target.querySelector("#rememberMe").checked;

    const passwordCrypted = getCryptPassword(userCredentials.password);

    userCredentials.password = passwordCrypted;

    console.log(userCredentials);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="px-xl-2 mx-auto col-sm-8 col-md-6 col-lg-12"
        style={{ width: "451px" }}
      >
        <Form onSubmit={handleSubmit} style={styles}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="border"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="border"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="rememberMe">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100 btn-login mb-3"
            id="btnSubmit"
          >
            Submit
          </Button>
          <div className="mx-auto text-align-center">
            <Link href="/resetcredentials">
              Recuperar Contraseña | Recuperar Usuario
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
