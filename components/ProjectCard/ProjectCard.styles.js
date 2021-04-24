import styled from 'styled-components';

export const Container = styled.article`
  width: 80%;
  margin: 1.5rem auto;
  padding: 1.5em;
  border-radius: 1rem;
  background-color: ${({theme}) => theme.colors.gray};
`;

export const Title = styled.h3`
  display: block;
  margin: 0 0 1rem;
  font-size: 2rem;
  font-weight: ${({theme}) => theme.fonts.weights.bold};
`;

export const Link = styled.a`
  display: ${props => props.isTitle ? 'initial' : 'flex'};
  ${props => props.isTitle ? '' : 'align-items: center'};
  vertical-align: middle;
  text-decoration: none;
  span {
    margin: ${props => props.isTitle ? '0 .5rem 0 0' : '0 0 0 .5rem'};
    color: ${props => props.isTitle ? '' : props.theme.colors.accentSecondary};
  }
  &:visited {
    color: initial;
  }
  &:hover {
    color: ${props => props.isTitle ? '' : props.theme.colors.accentSecondary};
    text-decoration: underline;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Tag = styled.span`
  display: block;
  background-color: ${({theme}) => theme.colors.accentSecondary};
  padding: .25rem .5rem;
  text-transform: capitalize;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 1rem;
  }
`
