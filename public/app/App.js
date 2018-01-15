import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './components/MyRoutes';


render(<BrowserRouter>
    <MyRoutes />
  </BrowserRouter>, document.getElementById('app'));
