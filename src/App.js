import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global'
import { useStickyState } from './hooks/useStickyState'
import { Body, BodyTitle, Header, Input, Page, PageTitle, Switch } from './components'
import { upperCase } from './utils'
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

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Page>
        <Header>
          <PageTitle
            as="button"
            titlePink={titlePink}
            onClick={() => setTitleStyled(bool => !bool)}>
            {upperCase`styled ${ interpolate }`}
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
    </ThemeProvider>
  );
}

export default App;
