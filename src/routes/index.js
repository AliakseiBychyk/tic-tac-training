import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Template from '../containers/Template'

const createRoutes = () => {
  return (
    <Switch>
      <Route path='/' component={Template} />
    </Switch>
  )
}

const Routes = createRoutes()

export default Routes
