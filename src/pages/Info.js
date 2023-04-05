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
          
        </Row>
        <Row xs={1} md={2} className="py-5">
          <Col className="pe-5 mb-5">
            <p className="titolo">Foglietto Illustrativo</p>
            <p className="sottotitolo">Una proposta per cinefili e cinofili della città e della collina</p>
            <p className="testo">
              Passeggiando lungo la pedonale di Via dei Rivi (<a href="https://it.wikipedia.org/wiki/Povo" target="_blank">Povo</a>) i più attenti di voi avranno notato una 
              tondeggiante struttura color panna vicino al campo da calcio. E' il Cinema Teatro Concordia,
              piccolo teatro con schermo. <br/> 
              Una breve chiacchierata col <a href="https://www.treccani.it/vocabolario/custode/" target="_blank">custode</a> 
              mi ha confermato essere uno spazio che, sopratutto nell'ultimo periodo, viene utilizzato giusto 
              una manciata di volte all'anno.<br/><br/>  
              
              È sì un peccato ma anche una golosa occasione per appassionati di cinema, perché senza troppe 
              spese è possibile organizzare alcune proiezioni di film che difficilmente avremmo altrimenti 
              l'occasione di vedere sul <a href="" target="_blank">grande schermo</a>.<br/><br/>

              In coda a questo ragionamento ci piacerebbe dunque come Associazione Kazoo APS proporvi una 
              carrellata di titoli sostanziosi che possano essere una modesta immersione nel cinema italiano 
              degli anni '60 e '70.
              L'invito è rivolto ad appassionati ed appassionate, con l'idea che possa anche però 
              diventare la giusta occasione per coinvolgere amici e amiche, per spronarli ed avvicinarli 
              ad una stagione cinematografica senza data di scadenza.<br/><br/>

              Questo sito ha lo scopo di sondare il vostro interesse per l'iniziativa, vi proponiamo un primo 
              film e, raccolte un numero sufficiente di adesioni, vi comunicheremo una data per la proiezione.<br/>
              Dovremmo riuscire a coprire i costi mantenendo il prezzo del "biglietto" entro i 5€, che andrà 
              diminuendo nel caso di una partecipazione numerosa.<br/>
              Per ulteriori info accedete al gruppo Telegram o scrivete alla pagina @kazoo.inc su Instagram.<br/><br/>

              Ciò che separa il dire e il fare in questo caso è il sapersi mettere d'accordo. Ci proviamo.
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
