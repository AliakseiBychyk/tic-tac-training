import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

ReactDOM.render(
  <Router
    children={Routes()}
  />,
  document.getElementById('root')
)
