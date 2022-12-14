import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
// import homeLogo from "../../Assets/home-main.svg";
import resume from "../../Assets/Anurag_Yadav_Android_Developer__Masai.pdf";
import Home2 from "./Home2";
import Type from "./Type";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { SiGithub, SiLinkedin } from "react-icons/si";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <section className="section-container">
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
      <div className="home-links" >
                <Button
                  href="https://drive.google.com/file/d/12LvA9HVA7vpCj_GAMFzJFc2JRw4NYBzb/view?usp=share_link"
                  target="_blank"
                  variant="primary"
                  style={{
                    padding: "7px",
                    marginRight: "5px",
                    fontWeight: "500",
                    alignItems: "center",
                  }}
                >
                  <AiOutlineDownload style={{ fontSize: "22px" }} />
                  <span>Resume</span>
                </Button>

                <Button
                  href="https://github.com/anuragn0507"
                  target="_blank"
                  variant="primary"
                  style={{ padding: "6px 10px", marginRight: "5px" }}
                >
                  <SiGithub style={{ fontSize: "25px" }} />
                  {/* <AiFillStar style={{ fontSize: "1.1em" }} /> */}
                </Button>

                <Button
                  href="https://www.linkedin.com/in/anurag-yadav-38015b15a/"
                  target="_blank"
                  variant="primary"
                  style={{ padding: "6px 10px", marginRight: "5px" }}
                >
                  <SiLinkedin style={{ fontSize: "25px" }} />
                </Button>
              </div>
      <Home2 />
    </section>
  );
}

export default Home;
