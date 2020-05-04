import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
            secondParagraph {
              childMarkdownRemark {
                html
              }
            }
          }
          contentfulBioHeadshot {
            image {
              file {
                url
              }
            }
          }
          contentfulBioImage {
            image {
              file {
                url
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
              contentfulApolloLogo {
                image {
                  file {
                    url
                  }
                }
              }
              contentfulApolloDescription {
                apolloDescriptionText {
                  childMarkdownRemark {
                    html
                  }
                }
              }
            }
        
      `}
      render={data => (
        <Layout>
            <SEO title="About Elias Miller" />
            <div className="section">
            <h1>Biography</h1>
            <div className="bio section">
              <div className="bioContainer"> 
              <div className="bioContainerOne">
              <img src={`${data.contentfulBioHeadshot.image.file.url}?w=400&h=530`} alt="Elias Miller" className="bioHeadshot"/>
                <div className="biographyOne" dangerouslySetInnerHTML={{
                      __html: data.contentfulBiography.biographyText.childMarkdownRemark.html,
                }}/>
              </div>  
              <div className="bioContainerTwo">
              <img src={`${data.contentfulBioImage.image.file.url}?w=400&h=530`} alt="Elias Miller Conducting" className="bioImage"/>
                <div className="biographyTwo" dangerouslySetInnerHTML={{
                    __html: data.contentfulBiography.secondParagraph.childMarkdownRemark.html,
                }}/>
              </div>  
              </div>
            </div>
            <div className="bio section">
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
                <div dangerouslySetInnerHTML={{
                    __html: node.pressQuote.childMarkdownRemark.html,
                }}/>
                <br/>
                <a className="readMore" href={node.link} target="_blank">Read More</a>
                <br/>
                </div>
                )
                )}
            </div>              
            <div className="bio section">
              <h1 className="title">About Apollo Ensemble</h1>
              <a href="https://apolloensembleofboston.com/" target="_blank"><img className="image apolloLogo" src={data.contentfulApolloLogo.image.file.url}/></a>
              <p dangerouslySetInnerHTML={{
                  __html: data.contentfulApolloDescription.apolloDescriptionText.childMarkdownRemark.html,
              }}/>
            </div>
            </div>
        </Layout>
        )} 

      />

)

export default About
