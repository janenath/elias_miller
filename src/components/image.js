import React from "react"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => (
  <StaticQuery
    query={graphql`
    query {
      allContentfulHomeImage {
        edges {
          node {
            title
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `}
  render={data => (
    <img src={data.allContentfulHomeImage.edges[0].node.image.fluid.src} alt={data.allContentfulHomeImage.edges[0].node.title}/>
  )}
  />
)


export default Image
