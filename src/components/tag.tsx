import React, { ReactElement } from "react";

import styled from "@emotion/styled";

const TagWrapper = styled.button`
  background-color: #e0e0e0;
  border-radius: 20px;
  border-style: none;
  font-size: 14px;
  margin-right: 6px;
  margin-bottom: 6px;

  &:hover {
    background-color: #d8d8d8;
  }
  &:active {
    background-color: #e0e0e0;
  }
  &:focus {
    background-color: #bbbbbb;
    outline: none;
  }
`;

export interface TagI {
  name: string;
  type: string;
}

interface TagProps {
  handleTagClick: (e: React.MouseEvent) => void;
  isSelected: boolean;
  name: string;
}

const Tag = ({ handleTagClick, isSelected, name }: TagProps): ReactElement => {
  const removeCount = (name: string): string => {
    return name.replace(/\s\(.+\)/g, "");
  };

  if (isSelected) {
    return (
      <TagWrapper
        onClick={handleTagClick}
        style={{ backgroundColor: "#C4C4C4" }}
        value={removeCount(name)}
      >
        {"\u2713 "}
        {name}
      </TagWrapper>
    );
  }

  return (
    <TagWrapper onClick={handleTagClick} value={removeCount(name)}>
      {name}
    </TagWrapper>
  );
};

export default Tag;
