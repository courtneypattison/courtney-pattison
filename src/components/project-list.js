import React, { useState } from "react";
import styled from "@emotion/styled";

import Project from "../components/project";

import { Projects } from "../data/projects";

import { getFixedImage } from "../utils/images";
import TagList from "./tag-list";

const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

function allTags() {
  return [...new Set(Projects.flatMap(project => project.tags))];
}

const ProjectList = (props) => {
  const [projects, setProjects] = useState(Projects);
  const { images } = props;

  function projectsWithTag(tag) {
    return projects.filter(
      (project) =>
        typeof project.tags.find((projectTag) => tag === projectTag) !==
        "undefined"
    );
  }

  const handleTagClick = (e) => {
    setProjects(projectsWithTag(e.target.value));
  };

  return (
    <ProjectsWrapper>
      <TagList tags={allTags()} handleTagClick={handleTagClick} />
      {projects.map((project) => (
        <Project
          project={project}
          image={getFixedImage(images, project.img)}
          handleTagClick={handleTagClick}
        />
      ))}
    </ProjectsWrapper>
  );
};

export default ProjectList;
