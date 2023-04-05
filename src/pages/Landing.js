import { Container, Row, Col } from "react-bootstrap";
import "../style/App.scss";
import "../style/input.scss";
import logo from "../media/logo.svg";
import sorpasso from "../media/sorpasso.png";
import cast1 from "../media/cast1.png";
import cast2 from "../media/cast2.png";
import cast3 from "../media/cast3.png";
import teatro from "../media/teatro.png";
import {BrowserView, MobileView} from 'react-device-detect';

function Actor({name, character, image}){
  return (
    <Col className="d-flex justify-content-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <img src={image} style={{ width: "200px" , height: "200px"}} />
              <p className="sottotitolo mt-2 w-75 text-center">
                {name}<br/>({character})
              </p>
            </div>
    </Col>
  )
}

function Cast(){
  return (
    <Row xs={1} md={4} className="py-5">
          <MobileView>
            <Col className="d-md-flex flex-column align-items-end mb-5">
              <p className="titolo ">Il Cast</p>
              <p className="sottotitolo">Il regista Dino Risi</p>
              <p className="testo text-md-end">
                Dino Risi è un attore italiano, regista, scrittore, sceneggiatore, co-sceneggiatore,
                 assistente alla regia, è nato il 23 dicembre 1916 a Milano (Italia) ed è morto il 
                 7 giugno 2008 all'età di 91 anni a Roma (Italia).<br/>
                 Nel 2005 ha ricevuto il david speciale al David di Donatello. Dal 1975 al 2005 Dino 
                 Risi ha vinto 2 premi: David di Donatello (1975, 2005).<br/><br/>
              </p>
              <p className="sottotitolo">Gli attori</p>
            </Col>
          </MobileView>
          <Actor name= "Vittorio Gassman" character="Bruno Cortona" image = {cast1}/>
          <Actor name= "Jean-Louis Trintignant" character="Roberto Mariani" image = {cast2}/>
          <Actor name= "Catherine Spaak" character="Lilly, figlia di Bruno" image = {cast3}/>
          <BrowserView>
          <Col className="d-md-flex flex-column align-items-end mb-5">
              <p className="titolo ">Il Cast</p>
              <p className="sottotitolo">Il regista Dino Risi</p>
              <p className="testo text-md-end">
                Dino Risi è un attore italiano, regista, scrittore, sceneggiatore, co-sceneggiatore,
                 assistente alla regia, è nato il 23 dicembre 1916 a Milano ed è morto il 
                 7 giugno 2008 all'età di 91 anni a Roma.<br/>
                 Nel 2005 ha ricevuto il david speciale al David di Donatello.
              </p>
            </Col>
          </BrowserView>
    </Row>
  );
}

function Landing() {
  return (
    <div className="Landing">
<Container>
        <Row className="py-5">
        
        </Row>
        <Row xs={1} md={2} className="py-5">
          <Col className="pe-5 mb-5">
            <p className="titolo">Il Sorpasso (1962).</p>
            <p className="sottotitolo">Regia di Dino Risi</p>
            <p className="testo">
            Le vicende narrate si svolgono nell'arco di una sola giornata. Nella torrida mattinata del Ferragosto del 1962, Roma è deserta. Bruno Cortona (Vittorio Gassman), un prestante quarantenne ossessionato dall'ansia di vivere e dal timore della vecchiaia, cialtrone e nullafacente, amante della guida sportiva e delle belle donne, vaga in auto alla ricerca di un pacchetto di sigarette e di un telefono pubblico.
Si imbatte nel giovane Roberto Mariani (Jean-Louis Trintignant), uno studente timido iscritto a Giurisprudenza: il ragazzo è rimasto nella desolata capitale per preparare degli esami. La sua realizzazione massima sarebbe quella di seguire le orme del cugino Alfredo - avvocato di uno studio privato a Rieti - avere una bella moglie e una Fiat 500.
Bruno chiede a Roberto il favore di usare il telefono di casa e poi lo invita per un giro sulla propria Lancia Aurelia B24 decappottabile. Il ragazzo, dapprima riluttante, accetta attratto dall'esuberanza dirompente di Bruno: inizia così uno scontro/incontro tra due generazioni, due classi sociali, due modi di vedere la vita. Gli amici per caso intraprendono un viaggio in auto lungo la via Aurelia, che li porterà verso la Toscana e mete sempre più distanti.
Arriveranno a far visita ad alcuni parenti di Roberto, a Lilly (Catherine Spaak), la figlia di Bruno e alla sua ex-moglie. Le ore passano veloci in un susseguirsi di episodi tragicomici, fino ad un inatteso epilogo...{" "}
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
        <Cast />
        <Row xs={1} md={2} className="py-5">
          <Col className="pe-3 mb-4">
            <p className="titolo">Il teatro</p>
            <p className="sottotitolo">Teatro Concordia</p>
            <p className="testo">
            Il teatro Concordia si trova a Povo, piccola frazione situata in una delle colline di Trento, 
            non presenta barriere architettoniche per l´accesso alla platea, il palcoscenico è attrezzato 
            per le rappresentazioni teatrali e musicali nonché di camerini a disposizione per gli artisti.{" "}
            </p>
            <p className="testo mt-4">
            Ampio parcheggio esterno. Platea percorribile lungo tutto il suo perimetro (pavimentata in 
            moquette). Posti riservati nella prima fila. Accesso al palco con 5 
            gradini alti 22 cm. Uscite di sicurezza senza barriere. Passaggio minimo di 87 cm per l’accesso 
            ai servizi igienici. Accesso alla galleria gradinata con rampe di scale.{" "}
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

export default Landing;
