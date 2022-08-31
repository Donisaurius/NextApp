import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function LoginLayout({ children }) {
  useEffect(() => {
    console.log("Componente cargado");
    console.log(children);
  }, []);

  return (
    <div>
      <Container fluid>
        <Row className="vh-100">
          <Col md="6" className="bg-primary d-lg-block d-none">
            <img src="LOGIN IMAGE.png" />
          </Col>
          <Col md={6} xs={12} className="v-100">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
