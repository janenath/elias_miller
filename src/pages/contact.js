import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const contact = () => (
    <Layout>
      <SEO title="Contact Elias Miller" />
      <h1 className="title">Contact</h1>
      <div className="section has-background-dark has-text-left">
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Name"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
              <input className="input" type="email" placeholder="Email"/>
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Message"></textarea>
            </div>
          </div>
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
)

export default contact
