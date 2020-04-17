import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const contact = () => (
    <Layout>
      <SEO title="Contact Elias Miller" />
      <h1>Contact</h1>
      <div className="section boxed">
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
          <div className="field">
            <label className="label">Name</label>
            <div>
              <input className="input" type="text" placeholder="Name"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="inputContainer">
              <FontAwesomeIcon icon={faEnvelope} />
              <input className="input" type="email" placeholder="Email"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div>
              <textarea className="textarea" placeholder="Message"></textarea>
            </div>
          </div>
          <div>
            <button className="button">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
)

export default contact
