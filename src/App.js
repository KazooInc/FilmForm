import { Container, Row, Col } from "react-bootstrap";
import "./style/App.scss";
import "./style/input.scss";
import logo from "./media/logo.svg";
import sorpasso from "./media/sorpasso.png";
import cast from "./media/cast.png";
import teatro from "./media/teatro.png";

function App() {
  return (
    <div className="App">
      <Container>
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
            <p className="titolo">Il Sorpasso.</p>
            <p className="sottotitolo">Autore e altre informazioni sull’anno</p>
            <p className="testo">
              Lorem ipsum dolor sit amet consectetur. Aliquet eget commodo
              integer nulla magna cras. Dignissim cras varius ultricies velit
              massa non id. Sapien diam sed in laoreet congue egestas
              pellentesque cras neque.{" "}
            </p>
            <form id="sib-form" method="POST" action="https://4af95b59.sibforms.com/serve/MUIEADhKo3_3a0NdVhz5pXdu-OCupVvitZk7eyZPfqNvN-P_1o3x-BwY3AbRTwmbNMc0TSi3cTLStk7-BHabFPLs8B-6N6-HEURnfprfZYqmSU2Ru8TKq7E2TQDXVtAZPhcbB-AMwJngZPbGk34AGU6GJxwiEQPSlNSX1jbtpu97Fwqh9LXNkQRtcTgkBxLhZFHLNX7ZBUm_3JfS">
              <label className="custom-field mt-5">
                <input type="text" placeholder="Inserisci qui la tua email"  id="EMAIL" name="EMAIL" autocomplete="off" data-required="true" required />
              </label>
              <p className="testo">
                Lorem ipsum dolor sit amet consectetur. Aliquet eget commodo
                integer nulla magna cras. Dignissim cras varius ultricies velit
                massa non id. Sapien diam sed in laoreet congue egestas
                pellentesque cras neque.{" "}
              </p>
              <input
                form="sib-form"
                class="button"
                type="submit"
                value="Registrati alla newsletter"
              />
            </form>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <img src={sorpasso} className="w-100" />
          </Col>
        </Row>
        <Row xs={1} md={4} className="py-5">
          <Col className="d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center">
              <img src={cast} style={{ width: "200px" }} />
              <p className="sottotitolo mt-5 w-75 text-center">
                Autore e altre informazioni sull’anno
              </p>
            </div>
          </Col>
          <Col className="d-none d-md-block">
            <div className="d-flex flex-column align-items-center">
              <img src={cast} style={{ width: "200px" }} />
              <p className="sottotitolo mt-5 w-75 text-center">
                Autore e altre informazioni sull’anno
              </p>
            </div>
          </Col>
          <Col className="d-none d-md-block">
            <div className="d-flex flex-column align-items-center">
              <img src={cast} style={{ width: "200px" }} />
              <p className="sottotitolo mt-5 w-75 text-center">
                Autore e altre informazioni sull’anno
              </p>
            </div>
          </Col>
          <Col className="d-md-flex flex-column align-items-end ">
            <p className="titolo ">Il Cast</p>
            <p className="sottotitolo">Autore e altre informazioni sull’anno</p>
            <p className="testo text-md-end">
              Lorem ipsum dolor sit amet consectetur. Aliquet eget commodo
              integer nulla magna cras. Dignissim cras varius ultricies velit
              massa.
            </p>
          </Col>
        </Row>
        <Row xs={1} md={2} className="py-5">
          <Col className="pe-3">
            <p className="titolo">Il teatro</p>
            <p className="sottotitolo">Autore e altre informazioni sull’anno</p>
            <p className="testo">
              Lorem ipsum dolor sit amet consectetur. Aliquet eget commodo
              integer nulla magna cras. Dignissim cras varius ultricies velit
              massa non id. Sapien diam sed in laoreet congue egestas
              pellentesque cras neque.{" "}
            </p>
            <p className="testo mt-5">
              Lorem ipsum dolor sit amet consectetur. Aliquet eget commodo
              integer nulla magna cras. Dignissim cras varius ultricies velit
              massa non id. Sapien diam sed in laoreet congue egestas
              pellentesque cras neque.{" "}
            </p>
          </Col>
          <Col className="d-md-flex align-items-center justify-content-end">
            <img src={teatro} className="w-100" />
          </Col>
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

export default App;
