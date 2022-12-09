import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaLinkedinIn } from "react-icons/fa";
import TransitionsModal from "../Modal/ContactModal.jsx";

function Home2() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            md={8}
            style={{ marginTop: "4vw" }}
            className="home-about-description"
            data-aos="fade-right"
          >
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" data-aos="fade-up">
            I have done my graduation from MIET college Meerut. 
            {/* I am */}
              {/* <i>
                <b className="purple">&nbsp; fast learner &nbsp;</b>
              </i>
              good in 
              <i>
                <b className="purple">&nbsp;team work, &nbsp;</b>
              </i>
              and
              <i>
                <b className="purple">&nbsp; adaptability &nbsp;</b>
              </i>
              and always keen to
              <i>
                <b className="purple">&nbsp; learn new things. &nbsp;</b>
              </i> */}
              {/* I am &nbsp; */}
              <i>
                {/* <b className="purple">MERN Stack developer &nbsp;</b> */}
              </i>
              😎
              <br />
              <br />
              <i> ◉ I am from </i>
              <b className="purple">Bhopal, Madhya Pradesh &nbsp;</b>
              <br />
              <br /> I have been developing Android Apps for over
              <i>
                <b className="purple">&nbsp; 2 yrs</b>
              </i>
              . Well versed in coding using
              <i>
                <b className="purple">&nbsp; Javascript, React &nbsp;</b>
              </i>
              and its frameworks
              <i>
                <b className="purple">&nbsp; React Native &nbsp;</b>
              </i>
              & I can also develop <i>
                <b className="purple">&nbsp; Native Android &nbsp;</b>
              </i>
              Apps using <i>
                <b className="purple">&nbsp; Kotlin/Java. &nbsp;</b>
              </i>
              <br />
              <br />
              As I
              <i>
                <b className="purple">&nbsp; grow &nbsp;</b>
              </i>
              and
              <i>
                <b className="purple">&nbsp; flourish &nbsp;</b>
              </i>
              as a Developer, one thing which keeps me going is my
              <i>
                <b className="purple">&nbsp; curiousness &nbsp;</b>
              </i>
              for discovering new things every day.
            </p>
          </Col>
          <Col
            md={4}
            className="myAvtar"
            data-aos="fade-down"
            style={{ marginTop: "1px" }}
          >
            <Tilt>
              <img
                style={{ height: "22vw" }}
                src="anurag.jpg"
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row style={{ marginTop: "5vh" }}>
          <Col md={12} className="home-about-social" data-aos="fade-up">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/balram1996"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/BalramKurmi7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/balram-kurmi-998324215/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <h3>
              Contact Details:
              <p
                href="tel:+8439869770"
                style={{
                  color: "#5AC5FB",
                }}
              >
                +918439869770 <br />
                anuragn1107@gmail.com
              </p>
            </h3>
            <br /> <br />
            <TransitionsModal />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
