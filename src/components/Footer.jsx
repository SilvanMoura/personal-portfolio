import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>Silvan</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://api.whatsapp.com/send?phone=5391674532" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/SilvanMoura" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://www.linkedin.com/in/silvanmoura/" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2023. Todos os direito reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
