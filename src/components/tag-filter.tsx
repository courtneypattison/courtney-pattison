import React, { ReactElement } from "react";

import styled from "@emotion/styled";

import JSONData from "../content/content.json";
import { ProjectI } from "./project";
import { TagI } from "./tag";
import TagList from "./tag-list";

const TagSection = styled.section`
  display: flex;
`;

const TagFilterHeader = styled.h1`
  font-size: 1.2rem;
  width: 9rem;
  flex-shrink: 0;
  text-align: right;
  margin-top: 2px;
`;

const TagFilterWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const VerticalLine = styled.div`
  width: 1px;
  background-color: #000;
  margin: 0 1rem;
  flex-shrink: 0;
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

  const getTagNamesWithCounts = (tagNames: string[]): string[] => {
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

    return getTagNamesWithCounts(tagNames);
  };

  return (
    <TagFilterWrapper>
      <TagSection>
        <TagFilterHeader>{JSONData.tagFilter.platforms}</TagFilterHeader>
        <VerticalLine />
        <TagList
          tagNames={getTagNames("Platform")}
          selectedTags={selectedTags}
          handleTagClick={handleTagClick}
        />
      </TagSection>
      <TagSection>
        <TagFilterHeader>{JSONData.tagFilter.languages}</TagFilterHeader>
        <VerticalLine />
        <TagList
          tagNames={getTagNames("Language")}
          selectedTags={selectedTags}
          handleTagClick={handleTagClick}
        />
      </TagSection>
      <TagSection>
        <TagFilterHeader>{JSONData.tagFilter.frameworks}</TagFilterHeader>
        <VerticalLine />
        <TagList
          tagNames={getTagNames("Framework")}
          selectedTags={selectedTags}
          handleTagClick={handleTagClick}
        />
      </TagSection>
      <TagSection>
        <TagFilterHeader>{JSONData.tagFilter.technologies}</TagFilterHeader>
        <VerticalLine />
        <TagList
          tagNames={getTagNames("Technology")}
          selectedTags={selectedTags}
          handleTagClick={handleTagClick}
        />
      </TagSection>
    </TagFilterWrapper>
  );
};

export default TagFilter;
