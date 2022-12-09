import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import trivago from "../../Assets/Projects/trivago.png";
import upgrad from "../../Assets/Projects/upgrad.png";
import producthunt from "../../Assets/Projects/producthunt.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've  worked recently .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={upgrad}
              title="blissworld-clone"
              description="We built this website using JAVASCRIPT | REACT | REDUX | JSON-SERVER | CSS | CHAKRA-UI, We were 4 member in the team, for code collaboration we used github regularly. We divided out work among four according to the expeertiseand in ust 4 days we have achieved some main functionality like Login, SignUp, Product Filter, Add to cart using Redux etc. My wholesome experience was good. I learned a lot from this "
              linklive="https://balram1996.github.io/"
              link="https://github.com/anuragn0507/BlissWorld-clone/tree/Master/blissworld-react-app"
              linkmedium="https://medium.com/@kurmibalram936/building-the-clone-of-upgrad-website-1dfbd60d1842"
              sitelink=""
              techStacks="React, Redux, Javascript, HTML, CSS, JSON-Server, Chakra-UI"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              
              title="trivago"
              description="We built this web-clone using JAVASCRIPT | REACT | JSON-SERVER | CSS | STYLED-COMPONENT, we were 4 member in the team, for code collaboration we used github regularly, we divided our work among four according to the experties and in just 4 days we have achieved some main functionality like login, singup, hotel search, filter etc. My wholesome experiece was good, i learned a lot from this"
              linklive="https://trivagoclone.netlify.app/"
              link="https://github.com/dhirendra9032/TrivagoClone/tree/master/trivago_clone"
              linkmedium="https://medium.com/@kurmibalram936/trivago-com-clone-424f17a9261b"
              
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={producthunt}
              title="Product Hunt"
              description="We built this web-clone using JAVASCRIPT | REACT | MONGODB | CSS | MATERIAL-UI, we were 4 member in our team, for code collaboration we used github regularly, we divided our work among four according to the experties and in just 4 days we have achieved some main functionality like login, singup, product search, product registration filter etc. My wholesome experiece was good, i learned a lot from this"
              linklive="https://product-hunt-frontend.herokuapp.com/"
              link="https://github.com/gsunil1996/p-hunt-website-clone/tree/master"
              linkmedium="https://medium.com/@kurmibalram936/product-hunt-clone-c6487b81fb4b"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
