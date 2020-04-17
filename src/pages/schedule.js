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
    <div className="section">
    <h1 className="title">Upcoming Event Schedule</h1>
    <div className="section boxed">
    {data.allContentfulEvent.edges.map(({ node }) =>(
      <div>
        <h3>{node.title}</h3>
        <p>{node.role}</p>
        <br/>
        <p dangerouslySetInnerHTML={{
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
</div>
  </div>
  </Layout>
)}
/>
)
export default schedule