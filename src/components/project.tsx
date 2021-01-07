import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import Img, { FixedObject } from "gatsby-image";

import TagList from "./tag-list";
import { TagI } from "./tag";

const imgStyle = {
  borderBottom: "solid #e0e0e0 1px",
};

const ProjectWrapper = styled.article`
  box-shadow: 0 1px 3px;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 300px;
  margin: 0.37rem;
`;

const TextLink = styled.a`
  text-decoration: underline;
  color: black;
  display: flex;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: auto;

  &:hover {
    color: #808080;
  }
  &:active {
    color: #595959;
  }
  &:focus {
    color: #595959;
    outline: none;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Year = styled.p`
  color: #808080;
`;

const getTagNames = (tags: TagI[]): string[] => {
  return tags.map((tag: TagI) => tag.name);
};

export interface ProjectI {
  name: string;
  description: string;
  year: number;
  url: string;
  source: string;
  img: string;
  tags: TagI[];
}

interface ProjectProps {
  handleTagClick: (e: React.MouseEvent) => void;
  image: FixedObject;
  project: ProjectI;
}

const Project = ({
  handleTagClick,
  image,
  project,
}: ProjectProps): ReactElement => {
  return (
    <ProjectWrapper>
      <>
        <Img fixed={image} alt="" style={imgStyle} />
        <TextWrapper>
          <h3>{project.name}</h3>

          <Year>{project.year}</Year>
          <p>{project.description}</p>
          <TagList
            handleTagClick={handleTagClick}
            selectedTags={[]}
            tagNames={getTagNames(project.tags)}
          />
        </TextWrapper>
      </>
      <TextLink href={project.source}>GitHub</TextLink>
    </ProjectWrapper>
  );
};

export default Project;
