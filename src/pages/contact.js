import React from "react"
import { navigate } from 'gatsby-link'
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {

    constructor(props) {
      super(props)
      this.state = { isValidated: false }
    }
  
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }
  
    handleSubmit = e => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch(error => alert(error))
    }


  render() {
    return(
      <Layout>
      <SEO title="Contact Elias Miller" />
      <div className="section">
      <h1>Contact</h1>
      <div className="section boxed form" id="contact">
      <form name="contact" method="post" action="/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field" onChange={this.handleChange} />
        </label>
      </div>
        <br/>
        <div className="formInputs">
          <div id="name">
            <label>
              Name 
              <br/>
              <input className="field" type="text" id="name" name="name" placeholder="Name" onChange={this.handleChange}/>
            </label>
          </div>
          <div id="email">
            <label>
              Email
              <br/>
              <input className="field" type="email" id="email" name="email" placeholder="Email" onChange={this.handleChange}/>
            </label> 
          </div>
          <div id="message">
            <label>
              Message
              <br/>
              <textarea className="textarea" id="message" name="message" placeholder="Message" onChange={this.handleChange}/>
            </label>
          </div>
        </div>   
        <div className="button">
          <button type="submit">send</button>
        </div>
      </form>
    </div>
    </div>
    </Layout>
      
    )

  }
}
