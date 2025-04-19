import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row className="justify-content-center">
              <Col md={12} className="text-center">
                <h1 style={{ fontSize: "2.4em", marginBottom: "15px" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
              </Col>
            </Row>
            <Row style={{ marginTop: "-5px" }}>
              <Col md={8} className="home-about-description">
                <p className="home-about-body" style={{ margin: "0" }}>
                 Hi, my name is <span className="yellow">Subashun Vikash </span>
                 and I'm from <span className="yellow"> Chennai, India.</span>
                <br />
                I am currently pursuing Bachelor of Technology in Computer Science and Engineering at SRM Institute of Technology with a CGPA of 9.07 and will Graduate in 2025.
                <br />
                As a
                <b className="yellow"> Software </b>Engineer,  
                I specialize in full-stack development, machine learning, and system design.
                <br />
                I am proficient in
                <b className="yellow"> Python, Java, C++, </b>
                as well as have expertise in
                <b className="yellow"> C#, HTML/CSS, and SQL.</b>
                <br />
                I have experience working
                with <b className="yellow">Angular, .NET,</b> and
                <i>
                  <b className="yellow"> distributed systems</b>
                </i>
                &nbsp; including
                <i>
                  <b className="yellow"> Socket Programming and TCP/IP</b>
                </i>
                <br />
                I am passionate about building
                <i>
                  <b className="yellow"> AI-Driven Applications </b>
                  and have worked on projects involving
                  <b className="yellow"> Machine Learning, NLP, and Financial Analysis.</b>
                </i>
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1 style={{ fontSize: "1.8em", marginBottom: "10px" }}>FIND ME ON</h1>
                <p style={{ marginBottom: "10px" }}>
                Feel free to connect with me and <span className="yellow">explore collaboration opportunities.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/VIKASH1426"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="mailto:subashunv@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="email"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://linkedin.com/in/subashun-vikash/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
}

export default About