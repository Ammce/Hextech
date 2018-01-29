import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
          <header>
            <div className="container">
              <div className="row">
                <div className="col">
                  <nav className="navbar navbar-expand-sm ">
                      <Link className="navbar-brand" to='/'>Home</Link>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link className="nav-link" to='/contact'>Get Started</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to='/schedule'>Services</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to='/contact'>Technologies</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to='/contact'>Blog</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to='/contact'>Contact Us</Link>
                        </li>
                        <li className="nav-item">
                          <a target="_blank" className="nav-link" href='/user'>User</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  </div>
                </div>
              </div>
          </header>
)

export default Header
