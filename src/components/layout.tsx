import React, { ReactElement } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
