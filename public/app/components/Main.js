import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Schedule from './Schedule'
import {Contact} from './Contact'
import Webapps from './Webapps';

const Main = (props) => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/services/webapps" component={Webapps}/>
    </Switch>
  </main>
)
export default Main
