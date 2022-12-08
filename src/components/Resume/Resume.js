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
            <h3 className="resume-title">Achievements</h3>
            <Resumecontent
              title=""
              content="Post Graduation Diploma in Computer Application"
              date="2020"
            />
            <Resumecontent
              title=""
              content="Internship in Graphic Designing"
              date="2020"
            />
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelor of Science"
              content="Barkatullah University, Bhopal"
              date="2015 - 2018"
            />
            <Resumecontent
              title="Intermediate"
              content="Jawahar Navodaya Vidhayalaya, Raisen"
              date="2013 - 2014"
            />
            <Resumecontent
              title="High School"
              content="Jawahar Navodaya Vidhayalaya, Raisen"
              date="2014 - 2015"
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
