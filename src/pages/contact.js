import React from "react"
import { navigate } from 'gatsby-link'
import Layout from "../components/layout"
import SEO from "../components/seo"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component{
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
        <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true" onSubmit={this.handleSubmit}>
          <input type="hidden" name="bot-field" />
          <div className="field">
            <label className="label">Name</label>
            <div className="inputContainer">
              <input className="input" type="text" placeholder="Name" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="inputContainer">
              <input className="input" type="email" placeholder="Email" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="inputContainer">
              <textarea className="textarea" placeholder="Message" onChange={this.handleChange}></textarea>
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
  }


} 
    

