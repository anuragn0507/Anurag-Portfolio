import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillGithub, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { ImBlog } from "react-icons/im";
import "./proj.css";
import { Col } from "react-bootstrap";
import { DiJavascript1, DiCss3, DiJavascript, DiGit } from "react-icons/di";
// import { Row } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Title>
        <p style={{ color: "whitesmoke", fontSize: "30px", lineHeight: "2" }}>
          {props.title}
        </p>
      </Card.Title>
      <Card.Img
        src={props.imgPath}
        alt="card-img"
        style={{ height: "250px" }}
      />
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* <div style={{ display: "flex" }}>
          <DiJavascript1 className="java" />
          <DiCss3 className="java" />
          <DiJavascript className="java" />
          <DiGit className="java" />
        </div> */}
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          Tech-Stacks: {props.techStacks}
        </div>

        <Col md={12} className="home-about-social">
          <p>
            Find<span className="purple"> More </span>below
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub style={{ fontSize: "1.7em" }} />
              </a>
              <p style={{marginTop: "2px"}}>Github</p>
            </li>
            <li className="social-icons">
              <a
                href={props.linklive}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineFundProjectionScreen style={{ fontSize: "1.6em" }} />
                
              </a>
              <p style={{marginTop: "2px"}}>Deployed Link</p>
            </li>

            <li className="social-icons">
              <a
                href={props.linkmedium}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <ImBlog style={{ fontSize: "1.5em" }} />
                
              </a>
              <p style={{marginTop: "2px"}}>Blog</p>
            </li>
          </ul>
        </Col>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
