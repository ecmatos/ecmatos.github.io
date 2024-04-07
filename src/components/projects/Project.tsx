import React from "react";
import {
  Container,
  ProjectBox,
  ProjectDescription,
  ProjectImage,
  ProjectLink,
  ProjectTitle,
} from "./ProjectStyles";

import { projectList } from "../../data/projects/projectList";

const Projects = () => {
  return (
    <Container>
      {projectList.map((project) => (
        <ProjectLink
          key={project.id}
          href={project.linkToProject}
          target="_blank"
          title={project.name}
        >
          <ProjectBox>
            <ProjectImage src={project.image} alt={project.imageAlt} />
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectBox>
        </ProjectLink>
      ))}
    </Container>
  );
};

export default Projects;
