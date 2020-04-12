import React from "react"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Conducting from "../images/conducting.jpg"

const IndexPage = () => (

    <Layout>
    <SEO title="Home" />
    <img src={Conducting} alt="Elias Miller" width="100%"/>
    </Layout>

)

export default IndexPage
