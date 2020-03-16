import React, { useState } from 'react'
import { ThemeProvider, ThemeConsumer } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global'
import { useStickyState } from './hooks/useStickyState'
import { Body, BodyTitle, Header, Input, Page, PageTitle, Spin, Switch } from './components'
import { upperCase, checkIsStyledComponent } from './utils'
import Day from './assets/day.jpg'
import Night from './assets/night.jpg'

function App() {
  const [darkMode, setDarkMode] = useStickyState(true, 'darkMode')
  const [titlePink, setTitleStyled] = useState(false)
  const toggleTheme = () => {
    if (darkMode) {
      setDarkMode(false)
    } else {
      setDarkMode(true)
    }
  }
  const interpolate = 'components'
  checkIsStyledComponent([Body, BodyTitle, Header, Input, Page, PageTitle, Spin, Switch])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Page>
        <Header>
          <PageTitle
            as="button"
            titlePink={titlePink}
            onClick={() => setTitleStyled(bool => !bool)}>
            <Spin margin='0 0.5em' animationLength='4s'><span role='img' aria-label='jsx-a11y/accessible-emoji'>&#9757;</span></Spin>{upperCase`styled ${ interpolate }`}
          </PageTitle>
          <Switch
            handleChange={() => toggleTheme()} />
        </Header>
        <Body>
          <BodyTitle>{darkMode ? 'Dark Mode' : 'Light Mode'}</BodyTitle>
          <img src={darkMode ? Night : Day}
            alt={darkMode ? "London Birdge night" : "London Birdge day"} />
          <Input small margin='1em 0' placeholder="Name" />
          <Input small margin='0 0 2em 0' placeholder="Email" />
        </Body>
      </Page>
      <ThemeConsumer>
        {theme => console.log(`text color: ${theme.text}, background color: ${theme.background}`)}
      </ThemeConsumer>
    </ThemeProvider>
  );
}

export default App;
