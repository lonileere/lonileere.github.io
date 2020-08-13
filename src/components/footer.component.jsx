import React from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <Navbar fixed="bottom">
        <Container>
          <Nav className="ml-auto">
            <div className="social-bar">
              <a href="https://github.com/lonileere" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faGithub} size="lg" />{" "}
              </a>
              <a href="https://twitter.com/leekasaur" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faTwitter} size="lg" />{" "}
              </a>
              <a href="https://www.linkedin.com/in/lonileere/" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faLinkedin} size="lg" />{" "}
              </a>
              <a href="https://www.facebook.com/l.onileere/" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faFacebook} size="lg" />{" "}
              </a>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
