import React from "react"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Headshot from "../images/headshot.png"

const IndexPage = () => (
    <StaticQuery
    query={graphql`  
    query {
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
        <img src={Headshot} alt="Elias Miller" className="headshot" width="40%"/>
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
