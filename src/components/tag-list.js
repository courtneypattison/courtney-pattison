import React from "react";

import Tag from "../components/tag";

const TagList = (props) => {
  return props.tags.map((tag) => (
    <Tag name={tag} handleTagClick={props.handleTagClick} />
  ));
};

export default TagList;
