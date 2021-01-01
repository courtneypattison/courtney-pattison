import React from "react";
import styled from "@emotion/styled";

const TagWrapper = styled.button`
  margin-right: 6px;
  margin-bottom: 6px;
`;

const Tag = (props) => {
  const handleSelected = () => {
    return props.isSelected ? " \u2715" : "";
  };

  return (
    <TagWrapper onClick={props.handleTagClick} value={props.name}>
      {props.name}
      {handleSelected()}
    </TagWrapper>
  );
};

export default Tag;
