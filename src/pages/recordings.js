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
    <div className="section">
    <h1>Recordings</h1>
    <div className="section boxed">
    {data.allContentfulMedia.edges.map(({ node }) =>(
          <div>
            <h2>{node.title}</h2>
            <br />
            <h3>{node.date}</h3>
            {node.caption && 
            <div>
              <br />
              <p dangerouslySetInnerHTML={{
                __html: node.caption.childMarkdownRemark.html,
                }}/>
            </div>

            }
            <br/>
            <iframe title={node.title} width="600" height="400" src={node.link}></iframe>

          </div>
        )
        )}
        </div>
        </div>
  </Layout>
  )}
  />
)

export default recordings
