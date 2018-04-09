import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../components/NavDrawer'

injectTapEventPlugin()

const Template = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <NavDrawer />
      <main>
        {children}
      </main>
    </div>
  </MuiThemeProvider>  
)

export default Template