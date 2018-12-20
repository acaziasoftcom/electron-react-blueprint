import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import './app-loader.scss'
import Home from './screens/home'
import Login from './screens/login'
import { browserHistory } from './utils/history'
export default class App extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    )
  }
}
