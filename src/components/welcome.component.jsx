import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Welcome() {
  return (
    <div>
      <div className="cover-inner">
        <h1 className="header-text">Welcome</h1>
        <p>
          <LinkContainer to="/projects">
            <Button variant="primary">View my Projects</Button>
          </LinkContainer>
        </p>
      </div>
    </div>
  );
}
