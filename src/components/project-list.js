import React from "react";
import styled from "@emotion/styled";

import Project from '../components/project';

import { projects } from "../data/projects";

import { getFixedImage } from '../utils/images';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ProjectList = (props) => {
  const { images } = props;
  return (
    <ProjectsWrapper>
      {projects.map((project) => (
        <Project project={project} image={getFixedImage(images, project.img)} />
      ))}
    </ProjectsWrapper>
  );
};

export default ProjectList;
