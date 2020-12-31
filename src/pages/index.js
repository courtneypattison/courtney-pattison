import React from "react";
import { graphql } from "gatsby";

import Header from "../components/header";
import Layout from "../components/layout";
import ProjectList from '../components/project-list';

import { getFixedImage } from '../utils/images';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <title>{data.site.siteMetadata.title}</title>
      <Header profilePic={getFixedImage(data, "profile-pic.png")} />
      <ProjectList images={data} />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
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
`;

export default IndexPage;
