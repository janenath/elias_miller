import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/assets/logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar" role="navigation" aria-label="main-navigation">
      <div className="navbar-brand">
        <a href="/" className="navbar-item has-background-black">
            <Logo width="40vw" />
        </a>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarContent">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div id="navbarContent" className="navbar-end">
          <a href="/" className="navbar-item">
            Home
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              About
            </a>
            <div className="navbar-dropdown">
              <a href="/biography" className="navbar-item is-black">
                Biography
              </a>
              <a href="/press" className="navbar-item">
                Press
              </a>
              <a href="/apolloensemble" className="navbar-item">
                Apollo Ensemble
              </a>
            </div>
          </div>
          <a href="/schedule/" className="navbar-item">
            Schedule
          </a>
          <a href="/recordings/" className="navbar-item">
            Recordings
          </a>
          <a href="/contact/" className="navbar-item">
            Contact
          </a>
          </div>

      </div>
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
