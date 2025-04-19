import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaGoogleDrive } from "react-icons/fa";
import Particle from '../components/Particle'

const driveLink = "https://drive.google.com/file/d/1zMYHKMwF8yqY7Q7o7dIPlLzcnbUEFjsl/view?usp=drive_link";
// Convert to embed link
const embedLink = driveLink.replace("/view?usp=drive_link", "/preview");

const Resume = () => {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <h1 style={{ color: "white" }}>My <span className="yellow">Resume</span></h1>
        </Row>
        
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
          <Button
            variant="primary"
            href={driveLink}
            target="_blank"
            style={{ 
              maxWidth: "250px",
              padding: "15px 25px",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              margin: "0 10px"
            }}
          >
            <FaGoogleDrive size={22} />
            Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <div style={{ 
            width: "100%", 
            display: "flex", 
            justifyContent: "center", 
            marginBottom: "2rem" 
          }}>
            <iframe
              src={embedLink}
              title="Resume Preview"
              width="800"
              height="1000"
              style={{
                border: "1px solid rgba(255, 215, 0, 0.2)",
                borderRadius: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.3)"
              }}
              allowFullScreen
            />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;