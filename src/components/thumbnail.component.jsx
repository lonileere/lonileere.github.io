import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Thumbnail(props) {
  return (
    <Card className="mb-2 profile-card">
      <Card.Img variant="top" src="https://via.placeholder.com/300" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button
          href={props.source}
          target="_blank"
          className="mr-2"
          variant="light"
          disabled={props.disabled}
        >
          Source Code
        </Button>
        <Button href={props.link} target="_blank" variant="outline-dark">
          Link to Project
        </Button>
      </Card.Body>
    </Card>
  );
}
