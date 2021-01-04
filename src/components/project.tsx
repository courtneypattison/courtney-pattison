import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import Img, { FixedObject } from "gatsby-image";

import TagList from "./tag-list";
import { TagI } from "./tag";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProjectWrapper = styled.article`
  border: 1px solid black;
  max-width: 320px;
  margin: 1rem;
  padding: 15px;
`;

const TextLink = styled.a`
  text-decoration: none;
  color: black;
  &:before,
  &:after {
    opacity: 0;
    transition: all 0.3s ease;
    font-size: 20px;
  }
  &:before {
    content: "(";
  }
  &:after {
    content: ")";
  }

  &:hover:before,
  &focus:before {
    margin-right: 10px;
    content: "(";
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    transform: translateX(20px);
    opacity: 1;
  }
  &:hover:after,
  &focus:after {
    margin-left: 10px;
    content: ")";
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    transform: translateX(-20px);
    opacity: 1;
  }
`;

const Description = styled.p``;

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
      <HeaderWrapper>
        <h2>
          <TextLink href={project.url}>{project.name}</TextLink>
        </h2>
        <a href={project.source}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </HeaderWrapper>
      <p>{project.year}</p>
      <Description>{project.description}</Description>
      <Img fixed={image} alt="" />
      <TagList
        handleTagClick={handleTagClick}
        selectedTags={[]}
        tagNames={getTagNames(project.tags)}
      />
    </ProjectWrapper>
  );
};

export default Project;
