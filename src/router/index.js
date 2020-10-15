import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Main from '@/pages/main'
import Login from '@/pages/login'

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/index" component={Main} />
      <Route path="/login" component={Login} />
      <Redirect to="/index"></Redirect>
    </Switch>
  </BrowserRouter>
)

export default BasicRoute
