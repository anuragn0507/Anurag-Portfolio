import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anurag Yadav </span>
            from <span className="purple"> Bhopal, Madhya Pradesh</span>
            <br /> I have done my graduation from M.I.E.T college Meerut in the specialization of <span className="purple"> B.Tech. (Computer Science & Engineering) </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
          </ul>

          <p style={{ marginBlockEnd: 15, color: "#4DBEF3" }}>
            "Keen to build Apps that Can solve Millions of people's problem!"
          </p>
          <footer className="blockquote-footer">Anurag Yadav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
