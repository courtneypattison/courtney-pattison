import React, { ReactElement } from "react";

import Tag from "./tag";

const isSelected = (selectedTags: string[], tag: string) => {
  return (
    typeof selectedTags.find((projectTag) => tag === projectTag) !== "undefined"
  );
};

interface TagListProps {
  handleTagClick: (e: React.MouseEvent) => void;
  selectedTags: string[];
  tags: string[];
}

const TagList = ({
  handleTagClick,
  selectedTags,
  tags,
}: TagListProps): ReactElement => {
  return (
    <>
      {tags.map((tag) => (
        <Tag
          handleTagClick={handleTagClick}
          isSelected={isSelected(selectedTags, tag)}
          key={tag}
          name={tag}
        />
      ))}
    </>
  );
};

export default TagList;
