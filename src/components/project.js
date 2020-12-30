import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";

// styles
const ProjectWrapper = styled.article`
  max-width: 320px;
  margin: 1rem;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  border-radius: 25%;
`;

const Description = styled.p``;

const Tag = styled.span``;

function getTags(tags) {
  return tags.map((tag) => <Tag>{tag} </Tag>);
}

const Project = (props) => {
  const { image, project } = props;
  return (
    <ProjectWrapper>
      <h2>
        <Link href={project.url}>{project.name}</Link>
      </h2>
      <p>{project.year}</p>
      <Description>{project.description}</Description>
      {getTags(project.tags)}
      <Link href={project.source}>Github</Link>
      <Img fixed={image} alt="" />
    </ProjectWrapper>
  );
};

export default Project;
