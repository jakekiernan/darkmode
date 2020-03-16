import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`

export const Spin = styled.div`
  margin: ${props => props.margin};
  animation: ${spin} 4s infinite linear;
`
