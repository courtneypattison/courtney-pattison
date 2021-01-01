import React, { useState } from "react";
import styled from "@emotion/styled";

import Project from "../components/project";

import { Projects } from "../data/projects";

import { getFixedImage } from "../utils/images";
import TagList from "./tag-list";

const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 600px;
`;

const ProjectList = (props) => {
  const [projects, setProjects] = useState(Projects);
  const [selectedTags, setSelectedTags] = useState([]);
  const { images } = props;

  const getAllTags = () => {
    return [...new Set(Projects.flatMap((project) => project.tags))];
  };

  const getAllProjectsWithTags = (tags) => {
    const isProjectWithTags = (project) => {
      return (
        project.tags.filter((projectTag) => tags.includes(projectTag))
          .length === tags.length
      );
    };

    return Projects.filter((project) => isProjectWithTags(project));
  };

  const removeSelectedTag = (tag) => {
    return selectedTags.filter((selectedTag) => selectedTag !== tag);
  };

  const getAllSelectedTags = (tag) => {
    const tags = removeSelectedTag(tag);
    return tags.length === selectedTags.length ? [...selectedTags, tag] : tags;
  };

  const handleTagClick = (e) => {
    const tags = getAllSelectedTags(e.target.value);
    setSelectedTags(tags);
    setProjects(getAllProjectsWithTags(tags));
  };

  return (
    <>
      <TagsWrapper>
        <TagList
          tags={getAllTags()}
          selectedTags={selectedTags}
          handleTagClick={handleTagClick}
        />
      </TagsWrapper>

      <ProjectsWrapper>
        {projects.map((project) => (
          <Project
            handleTagClick={handleTagClick}
            image={getFixedImage(images, project.img)}
            key={project.name}
            project={project}
          />
        ))}
      </ProjectsWrapper>
    </>
  );
};

export default ProjectList;
