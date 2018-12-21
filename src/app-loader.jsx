import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import './app-loader.scss'
import Home from './screens/home'
import Login from './screens/login'
import { browserHistory } from './utils/history'

var usbDetect = require('usb-detection')

usbDetect.startMonitoring()

// Detect add/insert
usbDetect.on('add', device => { console.log('add', device) })
usbDetect.on('add:vid', device => { console.log('add', device) })
usbDetect.on('add:vid:pid', device => { console.log('add', device) })
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
