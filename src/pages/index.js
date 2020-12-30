import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Header from "../components/header";
import Layout from "../components/layout";
import ProjectList from '../components/project-list';

import { getFixedImage } from '../utils/images';

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "images" } }) {
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
  `);

  return (
    <Layout>
      <title>Courtney Pattison</title>
      <Header profilePic={getFixedImage(images, "profile-pic.png")} />
      <ProjectList images={images} />
    </Layout>
  );
};

export default IndexPage;
