import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <Card
      className="project-card-view"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "200px",
          objectFit: "contain",
          alignSelf: "flex-start",
          borderRadius: "10%",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        <div>
          <Card.Title style={{ marginBottom: "0.5rem" }}>{props.title}</Card.Title>
          {props.date && (
            <div style={{ color: "white", marginBottom: "1rem", fontSize: "0.9rem" }}>
              {props.date}
            </div>
          )}
          <Card.Text style={{ textAlign: "justify", fontSize: "17px", marginBottom: "1" }}>
            {props.description}
          </Card.Text>
          {props.tech && (
            <div style={{ marginBottom: "1rem" }}>
              {props.tech.map((tech, index) => (
                <span
                  key={index}
                  style={{
                    background: "rgba(255, 0, 0, 0.99)",
                    color: "white",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontStyle: "bold",
                    marginRight: "0.5rem",
                    marginBottom: "0.5rem",
                    display: "inline-block",
                    border: "1px solid white"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <div>
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "flex-end",
              textAlign: "center",
              width: "100%"
            }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignContent: "flex-end",
                alignItems: "center",
                textAlign: "center",
                width: "100%"
              }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
