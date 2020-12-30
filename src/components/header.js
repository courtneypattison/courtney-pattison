import React from "react";
import { css } from "@emotion/react"
import styled from "@emotion/styled";
import Img from "gatsby-image";

const Link = styled.a`
  color: black;
  text-decoration: none;
  border-radius: 25%;
`;

const profilePic = css`
  border-radius: 50%;
  border: 1px solid black;
`;

const SocialLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header = (props) => {
  return (
    <header>
      <Img css={profilePic} fixed={props.profilePic} alt="" />

      <SocialLinkWrapper>
        <Link href="https://github.com/courtneypattison">GitHub</Link>
        <Link href="https://www.linkedin.com/in/courtney-pattison/">LinkedIn</Link>
        <Link href="https://stackoverflow.com/users/3376039/courtney-pattison">Stack Overflow</Link>
      </SocialLinkWrapper>
    </header>
  );
};

export default Header;
