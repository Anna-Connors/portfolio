import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import * as styles from "../components/about.module.css"

const AboutPage = ({ data }) => {
  const aboutData = data.contentfulAboutMe

  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <h1 className={styles.pageTitle}>About Me</h1>

        <section className={styles.aboutSection}>
          <h2>Education</h2>
            {documentToReactComponents(JSON.parse(aboutData.education.raw))}
        </section>
        <section className={styles.aboutSection}>
          <h2>Experience</h2>
            {documentToReactComponents(JSON.parse(aboutData.experience.raw))}
        </section>
        <section className={styles.aboutSection}>
          <h2>Goals</h2>
            {documentToReactComponents(JSON.parse(aboutData.goals.raw))}
        </section>
        <section className={styles.aboutSection}>
          <h2>Personal Info</h2>
            {documentToReactComponents(JSON.parse(aboutData.personalInfo.raw))}
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulAboutMe {
      education {
        raw
      }
      experience {
        raw
      }
      goals {
        raw
      }
      personalInfo {
        raw
      }
    }
  }
`


export const Head = () => <Seo title="About" />
export default AboutPage