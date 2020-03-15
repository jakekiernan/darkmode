import styled, { css } from 'styled-components'

export const PageTitle = styled.h3`
  margin: 0;
  color: ${props => props.theme.text};
  ${props => props.titlePink && css`
    color: palevioletred;
  `}
`
