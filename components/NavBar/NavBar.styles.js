import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
  background-color: ${({theme}) => theme.colors.primary};
`;
