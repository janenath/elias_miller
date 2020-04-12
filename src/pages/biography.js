import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Headshot from "../images/headshot.jpg"


const Biography = () => (
  <StaticQuery
      query={graphql`
        query {
          contentfulBiography {
            biographyText {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      `}
      render={data => (
        <Layout>
          <SEO title="Elias Miller Biography" />
          <h1 className="title">Elias Miller Biography</h1>
          <div className="section has-background-dark">
          <img className="image" src={Headshot} alt="Elias Miller" width="300px"/>
            <div className="biography" dangerouslySetInnerHTML={{
              __html: data.contentfulBiography.biographyText.childMarkdownRemark.html,
              }}/>
          </div>

        </Layout>
        )} 

      />

)

export default Biography
