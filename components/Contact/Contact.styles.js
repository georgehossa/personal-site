import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  margin: 1rem auto;
  text-align: center;
`;

export const Text = styled.p`
  font-size: ${({theme}) => theme.fonts.sizes.small}px;
  color: ${({theme}) => theme.colors.accentSecondary}
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  & > * {
    margin: 0 .5rem;
  }
`;
