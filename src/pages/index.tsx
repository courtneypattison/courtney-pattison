import React, { ReactElement } from "react";
import { graphql } from "gatsby";

import Header from "../components/header";
import Layout from "../components/layout";
import ProjectList from '../components/project-list';

const IndexPage = ({ data }: any): ReactElement => {
  return (
    <Layout>
      <title>{data.site.siteMetadata.title}</title>
      <Header />
      <ProjectList />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
