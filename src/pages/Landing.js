import React from "react";
import {
  Container,
  Accordion,
  Button,
  ListGroup,
  Image,
} from "react-bootstrap";
import Navigation from "../components/Navigation";
import film from "../data/film.json";

const Landing = () => {
  return (
    <div className="Landing">
      <Navigation />
      <Container className="mt-5">
        <Accordion flush>
          {film.map((item, i) => {
            return (
              <Accordion.Item eventKey={i}>
                <Accordion.Header>
                  <Image
                    src="https://il-cubo.it/images/cover19.jpg"
                    roundedCircle
                    style={{ height: "80px", width: "80px" }}
                    className="me-3"
                  />
                  <div className="w-100">
                    <p className="mb-2 fw-bold">{item.nome}</p>
                    <div className="line"></div>
                    <p className="mt-2">{item.autore}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>loremipsum</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
    </div>
  );
};

export default Landing;
