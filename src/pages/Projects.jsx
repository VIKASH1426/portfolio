import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/project.jpeg";
import codingImage from "../assets/code-typing.jpeg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="yellow">Projects </strong>
        </h1>
        <p style={{ color: "white",fontStyle: "bold",fontVariant: "normal" }}>
          Here are some of the projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codingImage}
              isBlog={false}
              title="PEFL-DR: Privacy-Enhanced Federated Learning"
              description="Designed a federated learning system for diabetic retinopathy detection using medical imaging from the APTOS dataset. Built with a server-client architecture to enable collaborative model training across simulated hospitals without sharing sensitive patient data."
              ghLink="https://github.com/VIKASH1426/pefl-dr"
              tech={["PyTorch", "Differential Privacy", "Homomorphic Encryption"]}
              date="January 2025"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codingImage}
              isBlog={false}
              title="Quantitative AI-Driven Portfolio Optimization"
              description="Developed a data-driven investment analysis tool integrating real-time data using the Yahoo Finance API. Implemented algorithmic solutions for efficient data computation and visualization, enabling sophisticated portfolio management and risk assessment."
              ghLink="https://fiamainvikash.streamlit.app/"
              demoLink=""
              tech={["Python", "Yahoo Finance API", "Data Analysis"]}
              date="October 2024"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codingImage}
              isBlog={false}
              title="ML-Based Stock Market Forecasting"
              description="Engineered predictive analytics models to analyze historical stock trends using Prophet.Finance API. Designed a real-time decision-making system with enhanced model accuracy and scalability, providing reliable market insights."
              ghLink="https://fiamainvikash.streamlit.app/"
              tech={["Python", "Prophet.Finance API", "Machine Learning"]}
              date="September 2024"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codingImage}
              isBlog={false}
              title="NLP-Powered Resume Analysis"
              description="Developed an AI-powered resume analysis tool using Natural Language Processing. Implemented keyword-matching algorithms to improve screening efficiency and automated candidate profiling, streamlining the recruitment process."
              ghLink="https://github.com/VIKASH1426/SRA-MAIN.git"
              tech={["Python", "NLP", "AI"]}
              date="January 2024"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codingImage}
              isBlog={false}
              title="SRM LMIS - Interactive Management System"
              description="Developed a client-server-based application to manage lab sessions, automating attendance and time tracking. Implemented socket programming for real-time multi-user communication between students and instructors, enhancing lab management efficiency."
              ghLink="https://github.com/VIKASH1426/SRM-LABS.git"
              tech={["Socket Programming", "Database Management", "Client-Server Architecture"]}
              date="September 2023"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;