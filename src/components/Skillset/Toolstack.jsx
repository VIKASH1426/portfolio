import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiAnaconda,
  SiDocker,
  SiPostman,
  SiLinux,
  SiWindowsterminal
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* IDEs and Development Environments */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="Visual Studio Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter title="Jupyter Notebook" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda title="Anaconda" />
      </Col>

      {/* Development Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired title="CISCO Networking" />
      </Col>

      {/* Operating Systems & Terminal */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux/Unix" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindowsterminal title="Shell Scripting" />
      </Col>
    </Row>
  );
}

export default Toolstack;

