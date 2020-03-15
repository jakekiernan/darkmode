import styled, { css } from 'styled-components'

export const PageTitle = styled.h3`
  margin: 0;
  font-size: 1em;
  color: ${props => props.theme.text};
  background: ${props => props.theme.background};
  border: ${props => props.theme.background};
  ${props => props.titlePink && css`
    color: palevioletred;
  `}
`
