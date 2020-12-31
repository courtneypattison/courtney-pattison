import React from "react";
import { graphql } from "gatsby";

import Header from "../components/header";
import Layout from "../components/layout";
import ProjectList from '../components/project-list';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <title>{data.site.siteMetadata.title}</title>
      <Header />
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
    allFile(filter: { relativeDirectory: { eq: "images/projects" } }) {
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
