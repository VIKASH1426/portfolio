import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiJava,
  DiGit,
  DiAngularSimple,
  DiDatabase,
} from "react-icons/di";
import {
  SiCplusplus,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiMicrosoftazure,
  SiMysql,
  SiTensorflow,
  SiScikitlearn
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus title="C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp title="C#" />
      </Col>

      {/* Web Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 title="CSS3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple title="Angular" />
      </Col>

      {/* Backend & Database */}
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase title="Database Management" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaServer title="Socket Programming" />
      </Col>

      {/* ML & Cloud */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow title="TensorFlow" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn title="Scikit-learn" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure title="Microsoft Azure" />
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
    </Row>
  );
}

export default Techstack;
