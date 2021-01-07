import styled from "@emotion/styled";

export const SocialLink = styled.a`
  color: black;
  line-height: 1;
  margin-right: 12px;
  text-decoration: none;

  &:hover {
    color: #808080;
    fill: #808080;
  }
  &:active {
    color: #595959;
    fill: #595959;
  }
  &:focus {
    color: #595959;
    fill: #595959;
    outline: none;
  }
`;
