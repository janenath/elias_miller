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
        <form name="contact" method="post" action="/" data-netlify="true" netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="contact" /> 
          <div hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          <div className="formInputs">
          <div className="field" id="name">
            <label className="label">
              Name 
              <br/>
            <input className="input" type="text" id="name" placeholder="Name" name="name" onChange={this.handleChange}/>
            </label>
          </div>
          <div className="field" id="email">
            <label className="label">
              Email
              <br/>
              <input className="input" type="email" id="email" placeholder="Email" name="email" onChange={this.handleChange}/>
            </label> 
          </div>
          <div className="field" id="message">
            <label className="label">
              Message
              <br/>
              <textarea className="textarea input" id="message" placeholder="Message" name="message" onChange={this.handleChange}/>
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
    

