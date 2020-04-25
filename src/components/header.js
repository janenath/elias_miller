import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {
   state = {
      navActive: false
    }
  toggleNav = (e) => {
      this.setState({navActive: !this.state.navActive})
  }


render() {
  return(
    <header>
      <Link to="/"><img src={logo} className="logo" alt="Elias Miller Logo"></img></Link>
      <div className="navContainer">
        <div className="hamburger">
          <FontAwesomeIcon icon={faBars} onClick={this.toggleNav}/>
        </div>
        <nav className={`navbar + ${this.state.navActive}`}> 
          <Link to="/about/">ABOUT</Link>
          <Link to="/schedule/">SCHEDULE</Link>
          <Link to="/recordings/">RECORDINGS</Link>
          <Link to="/contact/">CONTACT</Link>
        </nav> 
      </div>
    </header>
  )

}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

