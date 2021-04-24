import React from 'react';
import PropTypes from 'prop-types';
import { Container, TagsWrapper, Title, Link, Tag } from './ProjectCard.styles';
import * as Icons from '../Icons';
import { theme } from '../../styles/theme';

const ProjectCard = ({ project }) => {
  const { name, description, tags, public_url, github_url} = project;
  console.log(project);
  return (
    <Container>
      <Title>
        <Link href={public_url} target="_blank" isTitle >
        <span>{name}</span>
        <Icons.ExternalLinkIcon color={theme.colors.accentSecondary} isInline/>
        </Link>
      </Title>
      <TagsWrapper>
        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </TagsWrapper>
      <div>
        <p>{description}</p>
        <Link href={github_url} target="_blank">
          <Icons.GithubIcon isInline/>
          <span>{name}</span>
        </Link>
      </div>
    </Container>
  );
}


ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  public_url: PropTypes.string,
  github_url: PropTypes.string,
  tags: PropTypes.any,
};

export default ProjectCard;
