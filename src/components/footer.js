import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'



const Footer = () => (
<footer className="footer">
    <div className="footerContainer">
        © {new Date().getFullYear()} Elias Miller
        <br/>
        <div className="iconsContainer">
        <div className="iconContainer">
            <a href="https://www.facebook.com/pages/category/Orchestra/Apollo-Ensemble-of-Boston-2230079597009384/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
        </div>
        <div className="iconContainer">
            <a href="https://www.instagram.com/eliasmillerconductor/?hl=en" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
        </div>
        </div>
    </div>
</footer>
)



export default Footer




