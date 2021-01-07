import React, { ReactElement } from "react";
import styled from "@emotion/styled";

import "./layout.css";

const Wrapper = styled.div`
  padding: 1rem;
`;

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
