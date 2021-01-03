import React, { ReactElement, useState } from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

import Project from "./project";
import TagFilter from './tag-filter';

import JSONData from "../content/content.json";

import { ProjectI } from './project';
import { getFixedImage } from "../utils/images";

const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const ProjectList = (): ReactElement => {
  const [projects, setProjects] = useState(JSONData.projects);
  const [selectedTags, setSelectedTags] = useState([] as string[]);

  const data = useStaticQuery(
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

  const getAllProjectsWithTags = (tags: string[]): ProjectI[] => {
    const isProjectWithTags = (project: ProjectI) => {
      return (
        project.tags.filter((projectTag: string) => tags.includes(projectTag))
          .length === tags.length
      );
    };

    return JSONData.projects.filter((project: ProjectI) => isProjectWithTags(project));
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
      <TagFilter selectedTags={selectedTags} handleTagClick={handleTagClick} />

      <ProjectsWrapper>
        {projects.map((project: ProjectI) => (
          <Project
            handleTagClick={handleTagClick}
            image={getFixedImage(data, project.img)}
            key={project.name}
            project={project}
          />
        ))}
      </ProjectsWrapper>
    </>
  );
};

export default ProjectList;
