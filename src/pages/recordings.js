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
    <h1>Recordings</h1>
    {data.allContentfulMedia.edges.map(({ node }) =>(
          <div className="mediaContainer">
            <h3>{node.title}</h3>
            <h4>{node.date}</h4>
            <iframe title={node.title} width="600" height="400" src={node.link}></iframe>
            {node.caption && 
            <p dangerouslySetInnerHTML={{
              __html: node.caption.childMarkdownRemark.html,
              }}/>
            }
          </div>
        )
        )}
  </Layout>
  )}
  />
)

export default recordings
