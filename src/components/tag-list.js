import React from "react";

import Tag from '../components/tag';

const TagList = (props) => {
    return props.tags.map((tag) => <Tag name={tag}/>);
};

export default TagList;
