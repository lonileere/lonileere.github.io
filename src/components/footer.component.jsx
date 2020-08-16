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
                <FontAwesomeIcon icon={faGithub} size="2x" />{" "}
              </a>
              <a href="https://www.linkedin.com/in/lonileere/" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faLinkedin} size="2x" />{" "}
              </a>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
