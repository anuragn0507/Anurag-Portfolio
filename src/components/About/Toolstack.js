import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiNetlify, SiAndroidstudio, SiGoogleplay } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Visual Studio
        </strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Android Studio
        </strong>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Postman
        </strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Netlify
        </strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleplay />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Playstore
        </strong>
      </Col>


    </Row>
  );
}

export default Toolstack;
