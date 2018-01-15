import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link class="navbar-brand" to='/'>Logo</Link>
        <ul class="navbar-nav">
          <li class="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to='/schedule'>Schedule</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to='/contact'>Contact</Link>
          </li>
          <li class="nav-item">
            <a className="nav-link" href='/user'>User</a>
          </li>
        </ul>
    </nav>
  </header>
)

export default Header
