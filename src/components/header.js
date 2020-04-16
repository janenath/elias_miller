import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logo.png"




const Header = ({ siteTitle }) => (
  <header>
    <Link to="/"><img src={logo} className="logo" alt="Elias Miller Logo"></img></Link>
    <nav className="navbar">
        <Link to="/about/">ABOUT</Link>
        <Link to="/schedule/">SCHEDULE</Link>
        <Link to="/recordings/">RECORDINGS</Link>
        <Link to="/contact/">CONTACT</Link>
          {/* <div className="navbar-dropdown">
            <a href="/biography" className="navbar-item is-black">
              BIOGRAPHY
            </a>
            <a href="/press" className="navbar-item">
              PRESS
            </a>
            <a href="/apolloensemble" className="navbar-item">
              APOLLO ENSEMBLE
            </a>
          </div> */}
          <button className="burger"></button>
    </nav>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
