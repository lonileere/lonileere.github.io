import React from "react";
import { Card, CardDeck } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <h1 className="header-text"> Contact </h1>
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title>Email</Card.Title>
            <Card.Text>l.onileere@gmail.com</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>LinkedIn</Card.Title>
            <Card.Text>
              You can also contact me using my LinkedIn page here
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Resume</Card.Title>
            <Card.Text>You can download a copy of my resume here</Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
