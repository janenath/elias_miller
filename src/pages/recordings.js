import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const recordings = () => (
  <StaticQuery
  query={graphql`
    query {
      allContentfulMedia(sort: { order: DESC, fields: [date]}) {
        edges {
          node {
            title
            date(formatString: "MMMM Do, YYYY")
            link
            caption {
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
    <SEO title="Elias Miller Recordings" />
    <h1 className="title">Recordings</h1>
    {data.allContentfulMedia.edges.map(({ node }) =>(
          <div className="section has-background-dark">
            <h3 className="subtitle is-size-4">{node.title}</h3>
            <h4 className="is-size-5">{node.date}</h4>
            <br/>
            <iframe className="has-ratio" title={node.title} width="600" height="400" src={node.link}></iframe>
            {node.caption && 
            <div>
              <br />
              <p dangerouslySetInnerHTML={{
                __html: node.caption.childMarkdownRemark.html,
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

export default recordings
