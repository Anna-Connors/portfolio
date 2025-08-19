import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import * as styles from "../components/project.module.css"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import AccordionSection from "../components/Accordion"

const ProjectTemplate = ({ data }) => {
    const project = data.contentfulProject

    return (
        <Layout>
            <div className={styles.projectContainer}>
                <div className={styles.projectHeader}>
                    <div className={styles.projectImageSmall}>
                    {project.heroImage && (
                        <GatsbyImage
                            image={project.heroImage.gatsbyImageData}
                            alt={project.projectName}
                        />
                    )}
                    </div>
                    <div className={styles.projectIntro}>
                        <h1>{project.projectName}</h1>
                        <h3>{project.oneLineDescription}</h3>
                    </div>
                </div>

                <div className={styles.projectInfo}>
                    <AccordionSection title="Description">
                        {documentToReactComponents(JSON.parse(project.longDescription.raw))}
                    </AccordionSection>
                    <AccordionSection title="Issues Addressed">
                        {documentToReactComponents(JSON.parse(project.issueAddressed.raw))}
                    </AccordionSection>
                    <AccordionSection title="Tech Stack">
                        <p>{project.techStack}</p>
                    </AccordionSection>
                    <AccordionSection title="Design Decisions">
                        {documentToReactComponents(JSON.parse(project.designDecisions.raw))}
                    </AccordionSection>
                    <AccordionSection title="Process">
                        {documentToReactComponents(JSON.parse(project.process.raw))}
                    </AccordionSection>
                    <AccordionSection title="Repository">
                        <a href={project.repository}>View Repository</a>
                    </AccordionSection>
                    <AccordionSection title="Technical Implementation">
                        {documentToReactComponents(JSON.parse(project.technicalImplementation.raw))}
                    </AccordionSection>
                    <AccordionSection title="Challenges & Solutions">
                        {documentToReactComponents(JSON.parse(project.challengesSolutions.raw))}
                    </AccordionSection>
                </div>
            </div>
        </Layout> 
            

    )
}

export const query = graphql`
    query($slug: String!) {
        contentfulProject(slug: { eq: $slug }) {
            projectName
            oneLineDescription
            longDescription {
                raw
            }
            issueAddressed {
                raw
            }
            techStack
            designDecisions {
                raw
            }
            process {
                raw
            }
            repository
            technicalImplementation {
                raw
            }
            challengesSolutions {
                raw
            }
            heroImage {
                gatsbyImageData
            }
        }
    }
`

export const Head = ({ data }) => <Seo title={data.contentfulProject.title} />
export default ProjectTemplate