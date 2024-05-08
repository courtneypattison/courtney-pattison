import React, { ReactElement } from "react";

import styled from "@emotion/styled";

import Tag from "./tag";

const TagListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

function removeTagCount(tag: string): string {
  return tag.replace(/\s*\(.*?\)\s*/g, "");
}

const isSelected = (selectedTags: string[], tag: string) => {
  return (
    typeof selectedTags.find(
      (projectTag) => projectTag.localeCompare(removeTagCount(tag)) == 0
    ) !== "undefined"
  );
};

interface TagListProps {
  handleTagClick: (e: React.MouseEvent) => void;
  selectedTags: string[];
  tagNames: string[];
}

const TagList = ({
  handleTagClick,
  selectedTags,
  tagNames,
}: TagListProps): ReactElement => {
  return (
    <TagListWrapper>
      {tagNames.map((tagName: string) => (
        <Tag
          handleTagClick={handleTagClick}
          isSelected={isSelected(selectedTags, tagName)}
          key={tagName}
          name={tagName}
        />
      ))}
    </TagListWrapper>
  );
};

export default TagList;
