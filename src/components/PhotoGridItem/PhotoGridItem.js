import React from "react";
import styled from "styled-components/macro";
import ResponsiveImage from "../ResponsiveImage";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image baseSrc={src} img={{ alt }} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled(ResponsiveImage)`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 8px 0;
`;

const Tag = styled.li`
  display: inline;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  margin-left: 8px;
  line-height: 2;

  &:first-of-type {
    margin-left: 0;
  }

  padding: 8px;
`;

export default PhotoGridItem;
