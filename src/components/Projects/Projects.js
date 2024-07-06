import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import contactlist from "../../Assets/Projects/contactlist.jpeg";
import wanderlust from "../../Assets/Projects/wanderlust";
import csv from "../../Assets/Projects/csv.jpeg";
import taskmanagement from "../../Assets/Projects/taskmanagement.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderlust}
              isBlog={false}
              title="Wanderlust (AirBnb Clone)"
              description="Developed and launched ”Wanderlust,” a fully functional Airbnb clone using Node.js, Express.js
and MongoDB."
              ghLink="https://github.com/kashyap-p/Wanderlust---Nodejs-Project"
              // demoLink="https://wanderlust-nodejs-project.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contactlist}
              isBlog={false}
              title="Contact list API"
              description="The Contact List API is a Node.js application that provides a simple API for managing contacts. It uses MongoDB for data storage and supports both JSON and HTML responses. "
              ghLink="https://github.com/kashyap-p/Contact_List_Api"
              // demoLink="https://contact-list-api-latest.onrender.com/contacts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskmanagement}
              isBlog={false}
              title="React Task Management"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/kashyap-p/React-task-management"
              // demoLink="https://react-task-management.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={csv}
              isBlog={false}
              title="Csv Upload"
              description="CSV_Upload is a web application that allows users to upload and parse CSV files. "
              ghLink="https://github.com/kashyap-p/CSV_UPLOAD"
              // demoLink="https://csv-upload-file.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
