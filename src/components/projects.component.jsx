import React from "react";
import Thumbnail from "./thumbnail.component";
import { Row, Col } from "react-bootstrap";

export default function Projects() {
  return (
    <div className="my-3">
      <Row>
        <Col>
          <h1 className="header-text">Projects</h1>
          <p>These are a few examples of my work</p>
        </Col>
      </Row>
      <Row>
        <Col md={4} sm={12}>
          <Thumbnail
            title="ThinkFit"
            img=""
            description="Web based fitness application created using the MEAN stack"
            source=""
            link="https://thinkfit.herokuapp.com"
          />
        </Col>
        <Col md={4} sm={12}>
          <Thumbnail
            title="Sample Project 2"
            img=""
            description="sample description"
            source=""
            link=""
          />
        </Col>
        <Col md={4} sm={12}>
          <Thumbnail
            title="Sample Project 3"
            img=""
            description="sample description"
            source=""
            link=""
          />
        </Col>
      </Row>
    </div>
  );
}
