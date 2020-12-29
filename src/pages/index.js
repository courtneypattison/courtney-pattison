import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// styles
const pageStyle = {
  alignItems: "center",
  backgroundColor: "#ffe082",
  display: "flex",
  flexDirection: "column",
  padding: "1em",

}

const profileImageStyle = {
  borderRadius: "50%",
  border: "1px solid black",
}

const projectStyle = {
  maxWidth: "320px",
  margin: "1rem",
}

const projectsWrapperStyle = {
  display: "flex",
  flexFlow: "row wrap",
}

const socialLinkStyle = {
  display: "flex",
  justifyContent: "space-between",
  
}

const linkStyle = {
  color: "black",
  textDecoration: "none",
  borderRadius: "25%",
}

const descriptionStyle = {
}

const tagStyle = {
}

// data
const projects = [
  {
    name: "gulp-jpeg-2000",
    description: "A gulp plugin for converting images to JPEG 2000 (JP2) using ImageMagick with over 5K downloads.",
    year: 2018,
    url: "https://www.npmjs.com/package/gulp-jpeg-2000",
    source: "https://github.com/courtneypattison/gulp-jpeg-2000",
    img: "gulp-jpeg-2000.png",
    tags: ["Javascript", "Gulp", "Mocha", "Travis CI", "Coveralls"]
  },
  {
    name: "gulp-jpeg-xr",
    description: "A gulp plugin for converting images to JPEG XR (JXR) using nConvert with over 2K downloads.",
    year: 2018,
    url: "https://www.npmjs.com/package/gulp-jpeg-xr",
    source: "https://github.com/courtneypattison/gulp-jpeg-xr",
    img: "gulp-jpeg-xr.png",
    tags: ["Javascript", "Gulp", "Mocha", "Travis CI", "Coveralls"]
  },
];

// helper functions
function getFixedImage(data, originalName) {
  return data.allFile.edges.find(edge => edge.node.childImageSharp.fixed.originalName === originalName).node.childImageSharp.fixed
}

function getTags(tags) {
  return tags.map(tag => (
    <span style={tagStyle}>{tag} </span>
  ));
}

function getProjects(images) {
  return (
    <div style={projectsWrapperStyle}>
      {projects.map(project => (
        <article style={projectStyle}>
          <h2><a style={linkStyle} href={project.url}>{project.name}</a></h2>
          <p>{project.year}</p>
          <p style={descriptionStyle}>{project.description}</p>
          {getTags(project.tags)}
          <a style={linkStyle} href={project.source}>Github</a>
          <Img fixed={getFixedImage(images, project.img)} alt="" />
        </article>
      ))}
    </div>
  );
}

function getHeader(images) {
  return (
    <header>
      <Img style={profileImageStyle} fixed={getFixedImage(images, "courtney.png")} alt=""/>

      <div style={socialLinkStyle}>
        <a style={linkStyle} href="https://github.com/courtneypattison">GitHub</a>
        <a style={linkStyle} href="https://www.linkedin.com/in/courtney-pattison/">LinkedIn</a>
        <a style={linkStyle} href="https://stackoverflow.com/users/3376039/courtney-pattison">Stack Overflow</a>
      </div>
    </header>
  );
}

// markup
const IndexPage = () => {
  const images = useStaticQuery(graphql`
  query MyQuery {
    allFile(filter: {relativeDirectory: {eq: "images"}}) {
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
    <main style={pageStyle}>
      <title>Courtney Pattison</title>
      {getHeader(images)}
      {getProjects(images)}
    </main>
  )
}

export default IndexPage
