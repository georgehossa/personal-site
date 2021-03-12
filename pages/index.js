import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
`

export default function Home() {
  return <Title>Jorge Ossa</Title>
}