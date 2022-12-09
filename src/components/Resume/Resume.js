import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Balram Kurmi.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

function Resume() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <Container fluid className="resume-section">      
      <Container>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up"
        >
          <Button
            style={{ width: "20vh", margin: "2vw 0" }}
            variant="primary"
            href={pdf}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume" data-aos="fade-up">
          <Col
            md={6}
            className="resume-left"
            style={{ justifyContent: "center" }}
          >
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer"
              content="Ramsoft Technologies Pvt Ltd / Meddiff Technologies Pvt Ltd | Bengaluru"
              date="Aug 2021- Dec 2021"
            />
            <Resumecontent
              title="Software Engineer"
              content="Meddiff Technologies Pvt Ltd | Bengaluru"
              date="Feb 2020 –Aug2021"
            />            
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelor Of Technologies"
              content="Meerut Institute Of Engineering & Technologies (AKTU University , Lakhnow)"
              date="2016 - 2020"
            />
            <Resumecontent
              title="Intermediate"
              content="Jawahar Navodaya Vidhayalaya, Raisen"
              date="2014 - 2015"
            />
            <Resumecontent
              title="High School"
              content="Jawahar Navodaya Vidhayalaya, Raisen"
              date="2012 - 2013"
            />
          </Col>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-down"
        >
          <Button
            style={{ width: "20vh", margin: "4vw 0" }}
            variant="primary"
            href={pdf}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
