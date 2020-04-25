import React from "react"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Headshot from "../images/headshot.png"

const IndexPage = () => (

    <Layout>
    <SEO title="Home" />
    <div className="indexContainer">
        <img src={Headshot} alt="Elias Miller" className="headshot" width="40%"/>
        <div className="summaryContainer">
        <p className="bioSummary">Music director of the Apollo Ensemble of Boston since 2018, <a href="/biography" alt="biography"><strong>Elias Miller</strong></a> has established a reputation as one of Boston's leading young conductors and orchestra builders.</p>
        <br/><br/><br/><br/>
        <p className="bioSummary">Here is a quote from the press lorem ipsum</p>
        </div>
    </div>
    </Layout>

)

export default IndexPage
