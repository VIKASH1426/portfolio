import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../components/Particle';

const Home = () => {
  return (
    <section className="home-main">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="justify-content-center align-items-center text-center">
            <Col>
              <h1 className="main-title">
                LET ME <span className="yellow">INTRODUCE</span> MYSELF
              </h1>
              
              <h2 className="sub-title">
                Hi, I'm <span className="yellow">Subashun Vikash</span>
              </h2>
              
              <p className="role-description">
                <span className="yellow">Software Engineer • ML/AI  • Full-Stack Developer</span>
              </p>
              
              <p className="main-description">
                Currently an <span className="yellow">Intern at Accenture</span> from <span className="yellow">Chennai, India</span>, with experience at Wiseworks and Indus Novateur pvt ltd.
                <br/>
                B.Tech in Computer Science at SRM Institute of Technology (CGPA: 9.07).
                <br/>
                I specialize in <span className="yellow">Full-Stack Development</span>, <span className="yellow">Machine Learning</span>, and <span className="yellow">AI</span> with projects in financial analysis, stock forecasting, and AI-powered resume analysis.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home