import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import { RaisedButton } from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'


injectTapEventPlugin()

const style = {
  margin: 12,
}

const Template = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <header>
        <h1>Hello Tic Tac Training</h1>
        <RaisedButton
          label={'Test Button'} 
          backgroundColor={'#a4c619'}
          style={style}
          onTouchTap={()=> {console.log('Hello, I work')}}
        />
      </header>
      <main>
        {children}
      </main>
    </div>
  </MuiThemeProvider>  
)

export default Template