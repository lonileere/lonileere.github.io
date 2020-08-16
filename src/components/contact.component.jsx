import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1 className="header-text"> Contact </h1>
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">
              <a href="mailto:l.onileere@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="4x" />
              </a>
            </Card.Title>
            <Card.Title className="text-center">Email</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">
              <a href="https://www.linkedin.com/in/lonileere/">
                <FontAwesomeIcon icon={faLinkedin} size="4x" />
              </a>
            </Card.Title>
            <Card.Title className="text-center">LinkedIn</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">
              <Link to="/files/resume.pdf" target="blank" download>
                <FontAwesomeIcon icon={faFileAlt} size="4x" />
              </Link>
            </Card.Title>
            <Card.Title className="text-center">Resume</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
