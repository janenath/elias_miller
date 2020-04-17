import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const contact = () => (
    <Layout>
      <SEO title="Contact Elias Miller" />
      <div className="section">
      <h1>Contact</h1>
      <div className="section boxed form">
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
          <div className="field">
            <label className="label">Name</label>
            <div className="inputContainer">
              <input className="input" type="text" placeholder="Name"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="inputContainer">
              <input className="input" type="email" placeholder="Email"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="inputContainer">
              <textarea className="textarea" placeholder="Message"></textarea>
            </div>
          </div>
          <div>
            <button className="button">Submit</button>
          </div>
        </form>
        </div>
      </div>
    </Layout>
)

export default contact
