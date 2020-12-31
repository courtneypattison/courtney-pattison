import React from "react";
import styled from "@emotion/styled";

const TagWrapper = styled.button`
  margin-right: 6px;
  margin-bottom: 6px;
`;

const Tag = (props) => {
  return (
    <TagWrapper onClick={props.handleTagClick} value={props.name}>
      {props.name}{" "}
    </TagWrapper>
  );
};

export default Tag;
