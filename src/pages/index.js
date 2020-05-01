import React from "react"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <StaticQuery
    query={graphql`  
    query {
        contentfulHeadshot {
            headshot {
                file {
                    url
                }
            }
        }
        allContentfulHomeText {
            edges {
              node {
                text {
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
    <SEO title="Home" />
    <div className="indexContainer">
        <div className="headshotContainer">
            <img src={`${data.contentfulHeadshot.headshot.file.url}?w=400&h=530`} alt="Elias Miller" className="headshot"/>
        </div>
        <div className="summaryContainer">
        <p className="bioSummary" dangerouslySetInnerHTML={{
            __html: data.allContentfulHomeText.edges[0].node.text.childMarkdownRemark.html,
        }}/>
        </div>
    </div>
    </Layout>
    )} 

/>
  
)

export default IndexPage
