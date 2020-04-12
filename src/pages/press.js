import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const press = () => (
  <StaticQuery
  query={graphql`
    query {
      allContentfulPress(sort: { order: DESC, fields: [date]}) {
        edges {
          node {
            pressQuote {
              childMarkdownRemark {
                html
              }
            }
            date(formatString: "MMMM Do, YYYY")
            publication
          }
        }
      }
    }
  `}

  render={data => 
    (<Layout>
      <SEO title="Elias Miller Press" />
      <h1 className="title">Press</h1>
        {data.allContentfulPress.edges.map(({ node }) =>(
          <div className="section has-background-dark">
            <h3 className="subtitle" dangerouslySetInnerHTML={{
              __html: node.publication,
            }}/>
            <h4 dangerouslySetInnerHTML={{
                __html: node.date,
              }}/>
            <br/>
            <p dangerouslySetInnerHTML={{
                __html: node.pressQuote.childMarkdownRemark.html,
              }}/>
          </div>
        )
        )}
        
      
    </Layout>
    )} 

  />

)

export default press