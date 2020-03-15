import styled from 'styled-components'

export const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 10 : undefined,
}))`
  border-radius: 3px;
  border: 1px solid black;
  display: block;
  margin: ${props => props.margin};
  padding: 0.5em 1em;

  ::placeholder {
    color: ${props => props.theme.input};
    text-align: center; 
  }
`
