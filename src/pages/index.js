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
        contentfulHomeText {
            text {
              childMarkdownRemark {
                html
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
            <img src={data.contentfulHeadshot.headshot.file.url} alt="Elias Miller" className="headshot"/>
        </div>
        <div className="summaryContainer">
        <p className="bioSummary" dangerouslySetInnerHTML={{
            __html: data.contentfulHomeText.text.childMarkdownRemark.html,
        }}/>
        </div>
    </div>
    </Layout>
    )} 

/>
  
)

export default IndexPage
