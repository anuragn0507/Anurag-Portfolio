import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import youtube from "../../Assets/Projects/youtube-clone.png";
import blissworld from "../../Assets/Projects/blissworld-clone.png";
import myntra from "../../Assets/Projects/myntra-clone.png";
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
              imgPath={blissworld}
              title="blissworld-clone"
              description="We have built Ecom website using JAVASCRIPT | REACT | REDUX | JSON-SERVER | CSS | CHAKRA-UI, We were 4 member in the team, for code collaboration we used github regularly. We divided out work among four according to the expeertiseand in ust 4 days we have achieved some main functionality like Login, SignUp, Product Filter, Add to cart using Redux etc. My wholesome experience was good. I learned a lot from this "
              linklive="https://blissworld-clone-alpha.netlify.app/"
              link="https://github.com/anuragn0507/BlissWorld-clone/tree/Master/blissworld-react-app"
              linkmedium="https://medium.com/@abhirajrajappan/bliss-world-clone-eddf0631f3ed"
              sitelink=""
              techStacks="React, Redux, Javascript, HTML, CSS, JSON-Server, Chakra-UI"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard   
              imgPath={youtube}           
              title="youtube-clone"
              description="We built this web-clone of Youtube using JAVASCRIPT | JSON-SERVER | CSS where we can search any video, we were 5 member in the team, for code collaboration we used github regularly, we divided our work among four according to the experties and in just 4 days we have achieved some main functionality like login, singup, video search, filter, Like, Watch later etc. My wholesome experiece was good, i learned a lot from this"
              linklive="https://utube-clone.pages.dev/"
              link="https://github.com/anuj-midha247/UTUBE_CLONE"
              linkmedium="https://adityasingh200141.hashnode.dev/youtube-clone"
              techStacks="Javascript, HTML, CSS, JSON-Server"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={myntra}
              title="Myntra-Clone"
              description="We built this web-clone of Ecom website Myntra using JAVASCRIPT| CSS | HTML| MATERIAL-UI, we were 4 member in our team, for code collaboration we used github regularly, we divided our work among four according to the experties and in just 4 days we have achieved some main functionality like login, singup, product search, product registration filter etc. My wholesome experiece was good, i learned a lot from this"
              linklive="https://myntra-clone-saans.netlify.app/"
              link="https://github.com/anuragn0507/myntra-clone"
              linkmedium="https://medium.com/@kurmibalram936/product-hunt-clone-c6487b81fb4b"
              techStacks="Javascript, HTML, CSS"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
