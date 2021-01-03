import React, { ReactElement } from "react";

import Layout from "../components/layout"

const NotFoundPage = (): ReactElement => {
  return (
    <Layout>
      <p>This is not the page you are looking for *hand wave*.</p>
    </Layout>
  );
};

export default NotFoundPage;
