import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Logo from "../images/apollo-ensemble.jpg"


const apolloensemble = () => (
  <StaticQuery
    query={graphql`
    query {
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
        <h1 className="title">About Apollo Ensemble</h1>
        <div className="section has-background-dark">
          <img className="image" src={Logo} width="400px"/>
          <p dangerouslySetInnerHTML={{
            __html: data.allContentfulApolloDescription.edges[0].node.apolloDescriptionText.childMarkdownRemark.html,
          }}/>
        </div>
      </Layout>
    )}
    />
)

export default apolloensemble