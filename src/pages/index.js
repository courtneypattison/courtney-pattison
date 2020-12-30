import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Header from "../components/header";
import Layout from "../components/layout"

// styles
const Project = styled.article`
  max-width: 320px;
  margin: 1rem;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  border-radius: 25%;
`;

const Description = styled.p``;

const Tag = styled.span``;

// data
const projects = [
  {
    name: "gulp-jpeg-2000",
    description:
      "A gulp plugin for converting images to JPEG 2000 (JP2) using ImageMagick with over 5K downloads.",
    year: 2018,
    url: "https://www.npmjs.com/package/gulp-jpeg-2000",
    source: "https://github.com/courtneypattison/gulp-jpeg-2000",
    img: "gulp-jpeg-2000.png",
    tags: ["Javascript", "Gulp", "Mocha", "Travis CI", "Coveralls"],
  },
  {
    name: "gulp-jpeg-xr",
    description:
      "A gulp plugin for converting images to JPEG XR (JXR) using nConvert with over 2K downloads.",
    year: 2018,
    url: "https://www.npmjs.com/package/gulp-jpeg-xr",
    source: "https://github.com/courtneypattison/gulp-jpeg-xr",
    img: "gulp-jpeg-xr.png",
    tags: ["Javascript", "Gulp", "Mocha", "Travis CI", "Coveralls"],
  },
];

// helper functions
function getFixedImage(data, originalName) {
  return data.allFile.edges.find(
    (edge) => edge.node.childImageSharp.fixed.originalName === originalName
  ).node.childImageSharp.fixed;
}

function getTags(tags) {
  return tags.map((tag) => <Tag>{tag} </Tag>);
}

function getProjects(images) {
  return (
    <ProjectsWrapper>
      {projects.map((project) => (
        <Project>
          <h2>
            <Link href={project.url}>{project.name}</Link>
          </h2>
          <p>{project.year}</p>
          <Description>{project.description}</Description>
          {getTags(project.tags)}
          <Link href={project.source}>Github</Link>
          <Img fixed={getFixedImage(images, project.img)} alt="" />
        </Project>
      ))}
    </ProjectsWrapper>
  );
}

// markup
const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "images" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 320, height: 320) {
                originalName
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <title>Courtney Pattison</title>
      <Header profilePic={getFixedImage(images, "profile-pic.png")} />
      {getProjects(images)}
    </Layout>
  );
};

export default IndexPage;
