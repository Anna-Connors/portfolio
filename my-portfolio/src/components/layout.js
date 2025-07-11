import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./NavBar"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, fullWidth  = false}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <NavBar />
      <div
        style={{
          margin: fullWidth ? '0' : `0 auto`,
          maxWidth: fullWidth ? 'none' : `var(--size-content)`,
          padding: fullWidth ? '0' : `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
