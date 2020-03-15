import styled from 'styled-components'

export const Page = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  font-size: calc(10px + 2vmin);
  color: white;
  background-color: ${props => props.theme.background};
`;