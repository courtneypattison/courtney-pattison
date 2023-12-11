import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React, { ReactElement } from "react";

import styled from "@emotion/styled";

import { TagI } from "./tag";
import TagList from "./tag-list";

const imgStyle = {
  borderBottom: "solid #e0e0e0 1px",
};

const Links = styled.div`
  display: flex;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-top: auto;
`;

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
  margin-right: 1rem;

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
  color: #757575;
`;

const getTagNames = (tags: TagI[]): string[] => {
  return tags.map((tag: TagI) => tag.name);
};

export interface ProjectI {
  name: string;
  description: string;
  year: number;
  published?: string;
  source: string;
  img: string;
  tags: TagI[];
}

interface ProjectProps {
  handleTagClick: (e: React.MouseEvent) => void;
  image: ImageDataLike;
  project: ProjectI;
}

const Project = ({
  handleTagClick,
  image,
  project,
}: ProjectProps): ReactElement => {
  const getPublished = (): ReactElement | null => {
    return project.published ? (
      <TextLink href={project.published}>Published</TextLink>
    ) : null;
  };

  return (
    <ProjectWrapper>
      <>
        <a href={project.source}>
          <GatsbyImage
            image={getImage(image)!!}
            alt={project.name}
            style={imgStyle}
          />
        </a>
        <TextWrapper>
          <h2>{project.name}</h2>

          <Year>{project.year}</Year>
          <p>{project.description}</p>
          <TagList
            handleTagClick={handleTagClick}
            selectedTags={[]}
            tagNames={getTagNames(project.tags)}
          />
        </TextWrapper>
      </>
      <Links>
        <TextLink href={project.source}>GitHub</TextLink>
        {getPublished()}
      </Links>
    </ProjectWrapper>
  );
};

export default Project;
