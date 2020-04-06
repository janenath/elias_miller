import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/assets/logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <nav className="navbar is-black">
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarContent">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div id="navbarContent" className="navbar-menu">
        <a href="/" className="navbar-item">
          Home
        </a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            About
          </a>
          <div className="navbar-dropdown">
            <Link to="/biography" className="navbar-item">
              Biography
            </Link>
            <Link to="/press" className="navbar-item">
              Press
            </Link>
            <Link to="/apolloensemble" className="navbar-item">
              Apollo Ensemble
            </Link>
          </div>
        </div>
        <Link to="/schedule/" className="navbar-item">
          Schedule
        </Link>
        <Link to="/recordings/" className="navbar-item">
          Recordings
        </Link>
        <Link to="/contact/" className="navbar-item">
          Contact
        </Link>
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
