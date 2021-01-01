import React from "react";

import Tag from "../components/tag";

const isSelected = (selectedTags, tag) => {
  return (
    typeof selectedTags.find((projectTag) => tag === projectTag) !== "undefined"
  );
};

const TagList = (props) => {
  return props.tags.map((tag) => (
    <Tag
      handleTagClick={props.handleTagClick}
      isSelected={isSelected(props.selectedTags, tag)}
      key={tag}
      name={tag}
    />
  ));
};

export default TagList;
