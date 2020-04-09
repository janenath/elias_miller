import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const contact = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulContact {
          edges {
            node {
              email
            }
          }
        }
      }
    `}

  render={data => (
    <Layout>
      <SEO title="Contact Elias Miller" />
      <h1>Contact</h1>
      <a href={`mailto:${data.allContentfulContact.edges[0].node.email}`}>email Elias Miller</a>
    </Layout>
  )}
  />
)

export default contact
