import React, { ReactElement } from "react";
import styled from "@emotion/styled";

import JSONData from "../content/content.json";

import TagList from './tag-list';
import { ProjectI } from "./project";

const TagsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 600px;
`;

const getAllTags = (): string[] => {
    return [...new Set(JSONData.projects.flatMap((project: ProjectI) => project.tags))] as string[];
  };

interface TagFilterProps {
  handleTagClick: (e: React.MouseEvent) => void;
  selectedTags: string[];
}

const TagFilter = ({
  handleTagClick,
  selectedTags,
}: TagFilterProps): ReactElement => {
  return (
    <>
      <TagsWrapper>
        <TagList
          tags={getAllTags()}
          selectedTags={selectedTags}
          handleTagClick={handleTagClick}
        />
      </TagsWrapper>
    </>
  );
};

export default TagFilter;
