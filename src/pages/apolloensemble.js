import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const apolloensemble = () => (
  <StaticQuery
    query={graphql`
    query {
        allContentfulApolloLogo {
          edges {
            node {
              title
              image {
                fluid {
                  src
                }
              }
            }
          }
        }
      allContentfulApolloDescription {
        edges {
          node {
            apolloDescriptionText {
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
        <SEO title="Apollo Ensemble" />
        <h1>About Apollo Ensemble</h1>
        <img src={data.allContentfulApolloLogo.edges[0].node.image.fluid.src} alt={data.allContentfulApolloLogo.edges[0].node.title}/>
        <p dangerouslySetInnerHTML={{
          __html: data.allContentfulApolloDescription.edges[0].node.apolloDescriptionText.childMarkdownRemark.html,
        }}/>
      </Layout>
    )}
    />
)

export default apolloensemble