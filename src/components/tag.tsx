import React, { ReactElement } from "react";
import styled from "@emotion/styled";

const TagWrapper = styled.button`
  margin-right: 6px;
  margin-bottom: 6px;
  border-radius: 20px;
  font-size: 14px;
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
  const handleSelected = () => {
    return isSelected ? " \u2713" : "";
  };

  const removeCount = (name: string): string => {
    return name.replace(/\s\(.+\)/g, '');
  };

  return (
    <TagWrapper onClick={handleTagClick} value={removeCount(name)}>
      {handleSelected()}
      {name}
    </TagWrapper>
  );
};

export default Tag;
