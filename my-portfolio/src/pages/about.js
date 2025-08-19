import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import * as styles from "../components/about.module.css"
import AccordionSection from "../components/Accordion"

const AboutPage = ({ data }) => {
  const aboutData = data.contentfulAboutMe

  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <h1 className={styles.pageTitle}>About Me</h1>

        <AccordionSection title="Education">
            {documentToReactComponents(JSON.parse(aboutData.education.raw))}
        </AccordionSection>
        <AccordionSection title="Experience">
            {documentToReactComponents(JSON.parse(aboutData.experience.raw))}
        </AccordionSection>
        <AccordionSection title="Goals">
            {documentToReactComponents(JSON.parse(aboutData.goals.raw))}
        </AccordionSection>
        <AccordionSection title="Personal Info">
            {documentToReactComponents(JSON.parse(aboutData.personalInfo.raw))}
        </AccordionSection>
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