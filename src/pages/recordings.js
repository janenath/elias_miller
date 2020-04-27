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
    <div className="recordings section boxed">
    {data.allContentfulMedia.edges.map(({ node }) =>(
          <div className="recording">
            <iframe title={node.title} width="600" height="400" src={node.link}></iframe>
            <br/><br/>
            <h3>{node.title}</h3>
            <br />
            <h4>{node.date}</h4>
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
        </div>
        </div>
  </Layout>
  )}
  />
)

export default recordings
