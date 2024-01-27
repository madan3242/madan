import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typed from "typed.js";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer.", "React.js Developer.", "Node.js Developer."],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    })

    return () => {
      typed.destroy();
    }
  })
  return (
    <>
      <Fade direction="down" delay="1">
        <Container id="home">
          <Row>
            <Col>
              <div className="home text-center">
                <div className="heading">
                  <h2>Hello I'm</h2>
                  <h1>Madan Gowda</h1>
                  <h2>I'm a <span ref={el}></span></h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fade>
    </>
  );
};

export default Home;
