import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import React, { ReactElement, useState } from "react";

import styled from "@emotion/styled";

import JSONData from "../content/content.json";
import Project, { ProjectI } from "./project";
import { TagI } from "./tag";
import TagFilter from "./tag-filter";

const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 1rem;
`;

const getProjectImage = (data: any, originalName: string): ImageDataLike => {
  return data.allFile.edges.find(
    (edge: any) => `${edge.node.name}${edge.node.ext}` === originalName
  ).node.childImageSharp.gatsbyImageData;
};

const ProjectList = (): ReactElement => {
  const [projects, setProjects] = useState(JSONData.projects as ProjectI[]);
  const [selectedTags, setSelectedTags] = useState([] as string[]);

  const data = useStaticQuery(
    graphql`
      {
        allFile(filter: { relativeDirectory: { eq: "images/projects" } }) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  height: 185
                  placeholder: BLURRED
                  layout: FIXED
                )
              }
              name
              ext
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
            image={getProjectImage(data, project.img)}
            key={project.name}
            project={project}
          />
        ))}
      </ProjectsWrapper>
    </>
  );
};

export default ProjectList;
