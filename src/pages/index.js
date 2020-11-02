import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Head from '../components/head'

import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="Home"/>
        <h1>Hello.</h1>
        <h2>{data.site.siteMetadata.description}</h2>
      </Layout>
    </div>
  )
}

export default IndexPage
