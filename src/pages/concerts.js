import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const concerts = () => (

  <StaticQuery
    query={graphql`
      query {
        allContentfulEvent(sort: { order: ASC, fields: [sortDate]}) {
          edges {
            node {
              title
              link
              role
              dates {
                childMarkdownRemark {
                  html
                }
              }
              past
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
    <div className="section">
    <SEO title="Elias Miller Concerts" />
    <h1 className="title">Upcoming Concerts</h1>
    {data.allContentfulEvent.edges.map(({ node }) => (
          <div className="allEvents">
          
            {node.past == false &&
            <div className="section boxed">
            <div className="schedule">
            <h3><a href={node.link} target="_blank">{node.title}</a></h3>
            <p>{node.role}</p>
            <br/>
            <div dangerouslySetInnerHTML={{
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
                <div dangerouslySetInnerHTML={{
                  __html: node.description.childMarkdownRemark.html,
                }}/>
              </div>

             }
              </div> 
              </div>
             }
          </div>

        ) 
 
    )
  }
    <h1 className="title">Previous Concerts</h1>
    {data.allContentfulEvent.edges.map(({ node }) => (
      <div className="allEvents">
            {node.past == true &&
              <div className="section boxed">
            <div className="schedule">
            <h3><a href={node.link} target="_blank">{node.title}</a></h3>
            <p>{node.role}</p>
            <br/>
            <div dangerouslySetInnerHTML={{
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
                <div dangerouslySetInnerHTML={{
                  __html: node.description.childMarkdownRemark.html,
                }}/>
              </div>

             }
                </div>
              </div> 
             }
          </div>

        ) 
 
    )
  }
  </div>
</Layout>
)}
/>
)
export default concerts