import React, { ReactElement } from "react";

import styled from "@emotion/styled";

const TagWrapper = styled.button`
  background-color: rgba(90, 159, 126, .8);
  border-radius: 20px;
  border-style: none;
  font-size: 14px;
  margin-right: 6px;
  margin-bottom: 6px;

  &:hover {
    outline: 0;
    background: rgba(90, 159, 126, 1);;
    box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
  }
  &:active {
    filter: saturate(0.2) opacity(0.5);
    -webkit-filter: saturate(0.2) opacity(0.5);
  }
  &:focus {
    outline: 0;
    background: rgba(90, 159, 126, 1);
    box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
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
