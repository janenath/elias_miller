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
        <p className="bioSummary">Music director of the Apollo Ensemble of Boston since 2018, Elias Miller has established a reputation as one of Boston's leading young conductors and orchestra builders.</p>
        <br/><br/>
        <p className="bioSummary bioQuote">"Throughout the evening, conductor Elias Miller achieved a fine balance of the components of his ensemble, bringing out the passionate violins and soaring flutes that often mirror soloists’ melismatic runs"</p>
        <br/>
        <p className="bioSummary bioQuote"><a href="https://www.classical-scene.com/2017/10/30/new-st-john/"> -The Boston Musical Intelligencer</a></p>
        </div>
    </div>
    </Layout>

)

export default IndexPage
