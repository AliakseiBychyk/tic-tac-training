import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Template from '../containers/Template'
import Home from '../containers/Home'
import Profile from '../containers/Profile'

const createRoutes = () => (
  <Template>
    <Switch> 
      <Route path='/' exact component={Home} />
      <Route path='/profile' component={Profile} />
    </Switch>
  </Template>
)

const Routes = createRoutes()

export default Routes
