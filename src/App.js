/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { animated, useTransition } from "react-spring";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar.component";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import Projects from "./components/projects.component";
import About from "./components/about.component";
import Welcome from "./components/welcome.component";
import Footer from "./components/footer.component";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      position: "relative",
      top: 0,
      left: 0,
      opacity: 0,
      minHeight: "100vh",
      transform: "translate3d(100%,0,0)",
    },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <Container>
      <Navbar />
      {transitions.map(({ item: location, props, key }) => (
        <animated.div style={props} key={key}>
          <Switch location={location}>
            <Route path="/projects" exact component={Projects} />
            <Route path="/about" exact component={About} />
            <Route path="/" exact component={Welcome} />
          </Switch>
        </animated.div>
      ))}
      <Footer />
    </Container>
  );
}

export default App;
