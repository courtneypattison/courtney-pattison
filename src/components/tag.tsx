import React, { MouseEvent, ReactElement } from "react";
import styled from "@emotion/styled";

const TagWrapper = styled.button`
  margin-right: 6px;
  margin-bottom: 6px;
`;

interface TagProps {
  handleTagClick: (e: React.MouseEvent) => void;
  isSelected: boolean;
  name: string;
}

const Tag = ({ handleTagClick, isSelected, name }: TagProps): ReactElement => {
  const handleSelected = () => {
    return isSelected ? " \u2715" : "";
  };

  return (
    <TagWrapper onClick={handleTagClick} value={name}>
      {name}
      {handleSelected()}
    </TagWrapper>
  );
};

export default Tag;
