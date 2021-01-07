import React, { ReactElement } from "react";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";

import Header from "../components/header";
import Layout from "../components/layout";
import ProjectList from "../components/project-list";

const IndexPage = ({ data }: any): ReactElement => {
  React.useEffect(() => {
    if (!firebase) return;
    firebase.analytics().logEvent("visited_index");
  }, []);
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
