import React from "react";
import Thumbnail from "./thumbnail.component";
import { Row, Col, CardDeck } from "react-bootstrap";

export default function Projects() {
  return (
    <div className="my-3">
      <Row>
        <Col>
          <h1 className="header-text">Projects</h1>
          <p className="body-text">These are a few examples of my work</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <Thumbnail
              title="ThinkFit"
              img=""
              description="Web based fitness application created using the MERN stack"
              source=""
              link="https://thinkfit.herokuapp.com"
              disabled={true}
            />
            <Thumbnail
              title="Sample Project 2"
              img=""
              description="sample description"
              source=""
              link=""
            />
            <Thumbnail
              title="Sample Project 3"
              img=""
              description="sample description"
              source=""
              link=""
            />
          </CardDeck>
        </Col>
      </Row>
    </div>
  );
}
