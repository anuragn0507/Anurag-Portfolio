import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "@material-ui/core";
import { AiOutlineDownload } from "react-icons/ai";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Anurag Yadav</strong>
              </h1>

              <div style={{ padding: "0px 50px", textAlign: "left" }}>
                <Type />
              </div>
              <div style={{ padding: "10px 50px", textAlign: "left" }}>
                <Button size="large" color="success"  variant='contained'>
                  <AiOutlineDownload />
                  Resume
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} data-aos="fade-bottom">
              <img
                src="https://www.lanecode.com/wp-content/uploads/2021/02/cover-img-1-1.png"
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
