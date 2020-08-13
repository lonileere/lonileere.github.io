import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default function Welcome() {
  return (
    <div>
      <div className="cover-inner">
        <h1 className="header-text">Welcome</h1>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
    </div>
  );
}
