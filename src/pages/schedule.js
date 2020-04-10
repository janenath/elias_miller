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
    <h1>Upcoming Event Schedule</h1>
    {data.allContentfulEvent.edges.map(({ node }) =>(
      <div className="eventContainer">
        <h3>{node.title}</h3>
        <h4>{node.role}</h4>
        <p dangerouslySetInnerHTML={{
          __html: node.dates.childMarkdownRemark.html,
          }}/>
        {node.location && 
        <p>{node.location}</p>
        }
        {node.description && 
        <p dangerouslySetInnerHTML={{
          __html: node.description.childMarkdownRemark.html,
          }}/>
        }
      </div>
)
)}
  </Layout>
)}
/>
)
export default schedule