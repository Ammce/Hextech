import React from 'react'
import { Switch, Route } from 'react-router-dom'
<<<<<<< HEAD
import {Home} from './Home'
import {Schedule} from './Schedule'
=======
import Home from './Home'
import Schedule from './Schedule'
>>>>>>> Third commit
import {Contact} from './Contact'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/schedule' component={Schedule}/>
<<<<<<< HEAD
      <Route path="/contact" component={Contact}/>
=======
      <Route path="/contact" component={Contact}/> 
>>>>>>> Third commit
    </Switch>
  </main>
)
export default Main
