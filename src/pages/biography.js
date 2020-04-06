import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Biography = () => (
  <StaticQuery
      query={graphql`
        query {
          contentfulBiography {
            biography {
              biography 
              
            }
            
          }
        }
      `}
      render={data => (
        <Layout>
        <SEO title="Elias Miller Biography" />
        <h1>Elias Miller Biography</h1>
        <p>{data.contentfulBiography.biography.biography}</p>
      </Layout>
        )} 

      />

)

export default Biography
