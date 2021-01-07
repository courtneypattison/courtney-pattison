import React, { ReactElement, useState } from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { FixedObject } from "gatsby-image";

import Project from "./project";
import TagFilter from "./tag-filter";

import JSONData from "../content/content.json";

import { ProjectI } from "./project";
import { TagI } from "./tag";

const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const getFixedImage = (data: any, originalName: string): FixedObject => {
  return data.allFile.edges.find(
    (edge: any) => edge.node.childImageSharp.fixed.originalName === originalName
  ).node.childImageSharp.fixed;
};

const ProjectList = (): ReactElement => {
  const [projects, setProjects] = useState(JSONData.projects as ProjectI[]);
  const [selectedTags, setSelectedTags] = useState([] as string[]);

  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "images/projects" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 250, height: 250) {
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
        project.tags.filter((projectTag: TagI) =>
          tags.includes(projectTag.name)
        ).length === tags.length
      );
    };

    return JSONData.projects.filter((project: ProjectI) =>
      isProjectWithTags(project)
    );
  };

  const removeSelectedTag = (tagName: string): string[] => {
    return selectedTags.filter((selectedTag) => selectedTag !== tagName);
  };

  const getAllSelectedTagNames = (tagName: string): string[] => {
    const tags = removeSelectedTag(tagName);
    return tags.length === selectedTags.length
      ? [...selectedTags, tagName]
      : tags;
  };

  const handleTagClick = (e: React.MouseEvent) => {
    const tags = getAllSelectedTagNames((e.target as any).value);
    setSelectedTags(tags);
    setProjects(getAllProjectsWithTags(tags));
  };

  return (
    <>
      <TagFilter
        filteredProjects={projects}
        handleTagClick={handleTagClick}
        selectedTags={selectedTags}
      />

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
