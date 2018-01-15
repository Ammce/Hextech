import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Schedule from './Schedule'
import {Contact} from './Contact'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  </main>
)
export default Main
