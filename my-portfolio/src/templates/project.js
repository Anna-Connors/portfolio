import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/project.module.css"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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
                    <section className={styles.projectInfoSection}>
                        <h2>Description</h2>
                            {documentToReactComponents(JSON.parse(project.longDescription.raw))}
                    </section>
                    <section className={styles.projectInfoSection}>
                        <h2>Issues Addressed</h2>
                            {documentToReactComponents(JSON.parse(project.issueAddressed.raw))}
                    </section>
                    <section className={styles.projectInfoSection}>
                        <h2>Tech Stack</h2>
                        <p>{project.techStack}</p>
                    </section>
                    <section className={styles.projectInfoSection}>
                        <h2>Design Decisions</h2>
                            {documentToReactComponents(JSON.parse(project.designDecisions.raw))}
                    </section>
                    <section className={styles.projectInfoSection}>
                        <h2>Process</h2>
                            {documentToReactComponents(JSON.parse(project.process.raw))}
                    </section>
                    <section className={styles.projectInfoSection}>
                        <a href={project.repository}>View Repository</a>
                    </section>
                    <section className={styles.projectInfoSection}>
                        <h2>Technical Implementation</h2>
                            {documentToReactComponents(JSON.parse(project.technicalImplementation.raw))}
                    </section>
                    <section className={styles.projectInfoSection}>
                        <h2>Challenges & Solutions</h2>
                            {documentToReactComponents(JSON.parse(project.challengesSolutions.raw))}
                    </section>
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