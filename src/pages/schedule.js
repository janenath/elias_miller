import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const schedule = () => (

  <StaticQuery
    query={graphql`
      query {
        allContentfulEvent(sort: { order: ASC, fields: [sortDate]}) {
          edges {
            node {
              title
              role
              dates {
                childMarkdownRemark {
                  html
                }
              }
              location
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `}

  render={data => (
  <Layout>
    <SEO title="Elias Miller Schedule" />
    <h1 className="title">Upcoming Event Schedule</h1>
    {data.allContentfulEvent.edges.map(({ node }) =>(
      <div className="section has-background-dark">
        <h3 className="subtitle is-size-4">{node.title}</h3>
        <p className="is-size-5">{node.role}</p>
        <br/>
        <p className="is-size-5 has-text-weight-bold" dangerouslySetInnerHTML={{
          __html: node.dates.childMarkdownRemark.html,
          }}/>
        {node.location && 
        <div>
          <br/>
          <p>{node.location}</p>
        </div>
        }
        {node.description && 
        <div>
          <br/>
          <p dangerouslySetInnerHTML={{
            __html: node.description.childMarkdownRemark.html,
            }}/>
        </div>
        }
      </div>
)
)}
  </Layout>
)}
/>
)
export default schedule