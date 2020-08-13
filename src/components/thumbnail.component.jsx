import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Thumbnail(props) {
  return (
    <Card className="mb-2 profile-card">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button
          href={props.source}
          as="a"
          target="_blank"
          className="mr-2"
          variant="light"
        >
          Source Code
        </Button>
        <Button as="a" href={props.link} target="_blank" variant="primary">
          Link to Project
        </Button>
      </Card.Body>
    </Card>
  );
}
