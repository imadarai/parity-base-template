import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import footerStyles from "../components/footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        © 2020{" "}
        <Link className={footerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>{" "}
        — All Rights Reserved{" "}
      </p>
    </footer>
  )
}

export default Footer
