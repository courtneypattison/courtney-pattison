import React from "react";
import styled from "@emotion/styled";

const TagWrapper = styled.span``;

const Tag = (props) => {
    return <TagWrapper>{props.name} </TagWrapper>;
};

export default Tag;
