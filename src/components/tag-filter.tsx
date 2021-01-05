import React, { ReactElement } from "react";
import styled from "@emotion/styled";

import JSONData from "../content/content.json";

import { TagI } from "./tag";
import TagList from "./tag-list";
import { ProjectI } from "./project";

const TagFilterHeader = styled.h2``;

const TagFilterWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

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
  const getSortedTagCounts = (tagNames: Map<string, number>) => {
    return new Map(
      [...tagNames.entries()].sort(
        (a: [string, number], b: [string, number]) => b[1] - a[1]
      )
    );
  };

  const getTagNamesWithCount = (tagNames: string[]): string[] => {
    let tagCounts = new Map();
    let tagNamesWithCount: string[] = [];

    for (let tag of tagNames) {
      let count = tagCounts.get(tag) || 0;
      tagCounts.set(tag, count + 1);
    }

    tagCounts = getSortedTagCounts(tagCounts);

    for (let entry of tagCounts) {
      tagNamesWithCount.push(`${entry[0]} (${entry[1]})`);
    }

    return tagNamesWithCount;
  };

  const getTagNames = (type: string): string[] => {
    const getAllTagNames = (projectTag: TagI) =>
      projectTag.type === type ? [projectTag.name] : [];
    const getProjectTagNames = (project: ProjectI) =>
      project.tags.flatMap(getAllTagNames);
    const tagNames = filteredProjects.flatMap(getProjectTagNames);

    return getTagNamesWithCount(tagNames);
  };

  return (
    <TagFilterWrapper>
      <TagFilterHeader>{JSONData.tagFilter.header}</TagFilterHeader>
      <h3>{JSONData.tagFilter.platforms}</h3>
      <TagList
        tagNames={getTagNames("Platform")}
        selectedTags={selectedTags}
        handleTagClick={handleTagClick}
      />
      <h3>{JSONData.tagFilter.languages}</h3>
      <TagList
        tagNames={getTagNames("Language")}
        selectedTags={selectedTags}
        handleTagClick={handleTagClick}
      />
      <h3>{JSONData.tagFilter.frameworks}</h3>
      <TagList
        tagNames={getTagNames("Framework")}
        selectedTags={selectedTags}
        handleTagClick={handleTagClick}
      />
      <h3>{JSONData.tagFilter.technologies}</h3>
      <TagList
        tagNames={getTagNames("Technology")}
        selectedTags={selectedTags}
        handleTagClick={handleTagClick}
      />
    </TagFilterWrapper>
  );
};

export default TagFilter;
