import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <Layout fullWidth>
    <div className={styles.heroSection}>
      <div className={styles.heroImage}>
        <StaticImage
          src="../images/heroImage.jpg"
          loading="eager"
          width={400}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Anna Connors"
          className={styles.profileImage}
        />
      </div>
      <div className={styles.heroText}>
        <h1>Anna Connors</h1>
        <p>git log --oneline anna</p>
        <p>* Merged circus artistry with web development</p>
        <p>* Added project management & event coordination</p>
        <p>* Committed to world exploration</p>
        <p>* Pushed consulting expertise to production</p>
        <p>* Initial commit: born to create</p>
      </div>
    </div>
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
