import { Container, Row, Col } from "react-bootstrap";
import "../style/App.scss";
import "../style/input.scss";
import logo from "../media/logo.svg";
import sorpasso from "../media/sorpasso.png";
import { Link } from "react-router-dom"

function Info() {
  return (
    <div className="Info">
      <Container >
        <Row className="py-5">
          <Col>
            <img src={logo} className="logo" />
          </Col>
          <Col xs="auto" className="sottotitolo">
            Aiutaci a spargere la voce.
          </Col>
        </Row>
        <Row xs={1} md={2} className="py-5">
          <Col className="pe-5 mb-5">
            <p className="titolo">Cinema a Povo</p>
            <p className="sottotitolo">Autore e altre informazioni sull’anno</p>
            <p className="testo">
              Lorem ipsum dolor sit amet consectetur. Aliquet eget commodo
              integer nulla magna cras. Dignissim cras varius ultricies velit
              massa non id.
            </p>
            <Link to="/landing">
            <input
                
                className="button mt-5"
               
                value="Procedi al sito"
              />
            </Link>
           
          </Col>
          {/* <Col className="d-flex align-items-center justify-content-end">
            <img src={sorpasso} className="w-50" />
          </Col> */}
        </Row>
      </Container>
      <div className="Footer">
        <div id="primary" xs={1} md={3}>
          <Container>
            <Row xs={1} md={5} className="g-5 pb-4">
              <Col>
                <b>Associazione Kazoo</b>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur. Aliquet eget commodo
                  integer nulla magna cras. Dignissim cras varius ultricies
                  velit massa.
                </p>
              </Col>
              <Col className="d-none d-md-block"></Col>
              <Col className="d-none d-md-block"></Col>
              <Col>
                <b>Contatti</b>
                <ul className="mt-4">
                  <li>+39 35635675341</li>
                  <li>info@kazooinc.com</li>
                </ul>
              </Col>
              <Col>
                <b>Dati legali</b>
                <ul className="mt-4">
                  <li>Viale della cosa 23/A</li>
                  <li>38123, San Martino (TN)</li>
                  <li>Lorem ipsum dolor sit</li>
                  <li>Lorem ipsum dolor sit</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="secondary" className="d-flex align-items-center py-2">
          <Container>
            <Row xs={1} md={2}>
              <Col>Copyright Kazoo Inc. 2023</Col>
              <Col className="d-block d-md-flex justify-content-end">
                <a href="https://www.raffaelecrocco.com/" target="_blank">
                  site made by raffaelecrocco.com
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Info;
