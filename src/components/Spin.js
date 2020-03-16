import styled, { css, keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`

const animation = props =>
  css`
    ${spin} ${props.animationLength} infinite linear;
  `

export const Spin = styled.div`
  margin: ${props => props.margin};
  animation: ${animation};
`
