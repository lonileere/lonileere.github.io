import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div>
      <h1 className="header-text"> Contact </h1>
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </Card.Title>
            <Card.Title className="text-center">Email</Card.Title>
            <Card.Text>l.onileere@gmail.com</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Card.Title>
            <Card.Title className="text-center">LinkedIn</Card.Title>
            <Card.Text>
              You can also contact me using my LinkedIn page here
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">
              <FontAwesomeIcon icon={faFileAlt} size="lg" />
            </Card.Title>
            <Card.Title className="text-center">Resume</Card.Title>
            <Card.Text>You can download a copy of my resume here</Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
