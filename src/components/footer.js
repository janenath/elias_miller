import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'



const Footer = () => (
<footer className="footer">
    <div className="content has-text-centered">
        © {new Date().getFullYear()} Elias Miller
        <br/>
        <span className="icon is-large">
            <a href="https://www.facebook.com/pages/category/Orchestra/Apollo-Ensemble-of-Boston-2230079597009384/" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
        </span>
        <span className="icon is-large">
            <a href="https://www.instagram.com/unrealeliasmiller/?hl=en/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
        </span>
    </div>
</footer>
)



export default Footer




