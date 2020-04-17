import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Headshot from "../images/headshot.png"
import Logo from "../images/apollo-ensemble.jpg"

const About = () => (
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
            allContentfulPress(sort: { order: DESC, fields: [date]}) {
                edges {
                  node {
                    pressQuote {
                      childMarkdownRemark {
                        html
                      }
                    }
                    date(formatString: "MMMM Do, YYYY")
                    publication
                    link
                  }
                }
              }
              allContentfulApolloDescription {
                edges {
                node {
                    apolloDescriptionText {
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
            <SEO title="About Elias Miller" />
            <div className="section about">
                <h1>Biography</h1>
                <div className="biography" dangerouslySetInnerHTML={{
                    __html: data.contentfulBiography.biographyText.childMarkdownRemark.html,
                }}/>
            </div>
            <div className="section about">
                <h1 className="title">Press</h1>
                {data.allContentfulPress.edges.map(({ node }) => (
                    <div className="subSection">
                    <h3 dangerouslySetInnerHTML={{
                    __html: node.publication,
                }}/>
                <h4 dangerouslySetInnerHTML={{
                    __html: node.date,
                }}/>
                <br/>
                <p dangerouslySetInnerHTML={{
                    __html: node.pressQuote.childMarkdownRemark.html,
                }}/>
                <br/>
                <a className="readMore" href={node.link} target="_blank">Read More</a>
                <br/>
                </div>
                )
                )}
            </div>
            <div className="section about apollo">
                <h1 className="title">About Apollo Ensemble</h1>
                <a href="https://apolloensembleofboston.com/" target="_blank"><img className="image" src={Logo} width="400px"/></a>
                <p dangerouslySetInnerHTML={{
                    __html: data.allContentfulApolloDescription.edges[0].node.apolloDescriptionText.childMarkdownRemark.html,
                }}/>
            </div>



        </Layout>
        )} 

      />

)

export default About
