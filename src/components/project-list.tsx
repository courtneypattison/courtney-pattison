import React, { ReactElement, useState } from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

import Project from "./project";

import { ProjectI, Projects } from "../data/projects";

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

const ProjectList = (): ReactElement => {
  const [projects, setProjects] = useState(Projects);
  const [selectedTags, setSelectedTags] = useState([] as string[]);

  const images = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "images/projects" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 290, height: 290) {
                  originalName
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `
  );

  const getAllTags = () => {
    return [...new Set(Projects.flatMap((project) => project.tags))];
  };

  const getAllProjectsWithTags = (tags: string[]): ProjectI[] => {
    const isProjectWithTags = (project: ProjectI) => {
      return (
        project.tags.filter((projectTag: string) => tags.includes(projectTag))
          .length === tags.length
      );
    };

    return Projects.filter((project: ProjectI) => isProjectWithTags(project));
  };

  const removeSelectedTag = (tag: string): string[] => {
    return selectedTags.filter((selectedTag) => selectedTag !== tag);
  };

  const getAllSelectedTags = (tag: string): string[] => {
    const tags = removeSelectedTag(tag);
    return tags.length === selectedTags.length ? [...selectedTags, tag] : tags;
  };

  const handleTagClick = (e: React.MouseEvent) => {
    const tags = getAllSelectedTags((e.target as any).value);
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
