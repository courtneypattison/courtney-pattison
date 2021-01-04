import React, { ReactElement } from "react";
import styled from "@emotion/styled";

import JSONData from "../content/content.json";

import { TagI } from "./tag";
import TagList from "./tag-list";
import { ProjectI } from "./project";

const TagFilterHeader = styled.h2``;

interface TagFilterProps {
  filteredProjects: ProjectI[];
  handleTagClick: (e: React.MouseEvent) => void;
  selectedTags: string[];
}

const TagFilter = ({
  filteredProjects,
  handleTagClick,
  selectedTags,
}: TagFilterProps): ReactElement => {
  const getTagNames = (type: string): string[] => {
    const getAllTagNames = (projectTag: TagI) =>
      projectTag.type === type ? [projectTag.name] : [];
    const getProjectTagNames = (project: ProjectI) =>
      project.tags.flatMap(getAllTagNames);
    const tagNames = filteredProjects.flatMap(getProjectTagNames);
    return [...new Set(tagNames)] as string[];
  };

  return (
    <>
      <TagFilterHeader>{JSONData.tagFilter.header}</TagFilterHeader>
      <h3>{JSONData.tagFilter.choosePlatforms}</h3>
      <TagList
        tagNames={getTagNames("Platform")}
        selectedTags={selectedTags}
        handleTagClick={handleTagClick}
      />
      <h3>{JSONData.tagFilter.chooseLanguages}</h3>
      <TagList
        tagNames={getTagNames("Language")}
        selectedTags={selectedTags}
        handleTagClick={handleTagClick}
      />
      <h3>{JSONData.tagFilter.chooseFrameworks}</h3>
      <TagList
        tagNames={getTagNames("Framework")}
        selectedTags={selectedTags}
        handleTagClick={handleTagClick}
      />
      <h3>{JSONData.tagFilter.chooseTechnologies}</h3>
      <TagList
        tagNames={getTagNames("Technology")}
        selectedTags={selectedTags}
        handleTagClick={handleTagClick}
      />
    </>
  );
};

export default TagFilter;
