import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../components/NavDrawer'
import { Header, Main } from '../styled/Template'

injectTapEventPlugin()

const Template = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <NavDrawer />
      <Header>
        Tic Tac Turning - Training  
      </Header>  
      <Main>
        {children}
      </Main>
    </div>
  </MuiThemeProvider>  
)

export default Template