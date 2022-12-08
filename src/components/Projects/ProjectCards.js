import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillGithub, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { ImBlog } from "react-icons/im";
import "./proj.css";
import { Col } from "react-bootstrap";
import { DiJavascript1,DiCss3 ,DiJavascript,DiGit } from "react-icons/di";
// import { Row } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Title>
        <a
          href={props.sitelink}
          style={{ color: "whitesmoke", fontSize: "30px", lineHeight: "2" }}
        >
          {props.title}
        </a>
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
      <div style={{ display:"flex"}}>
      <DiJavascript1 className="java"/>
      <DiCss3 className="java"/>
      <DiJavascript className="java"/>
      <DiGit className="java"/>
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
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={props.linkmedium}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <ImBlog />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={props.linklive}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineFundProjectionScreen />
              </a>
            </li>
          </ul>
        </Col>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
