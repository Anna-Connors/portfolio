import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../components/project.module.css"

const ProjectsPage = ({ data }) => {

  return (
    <Layout>
      <div className={styles.projectContainer}>
        <h1 className={styles.pageTitle}>Projects</h1>

        <div className={styles.projectGrid}>
          {data.allContentfulProject.nodes.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <Link to={`/projects/${project.slug}`}>
                <GatsbyImage
                  image={project.heroImage.gatsbyImageData}
                  alt={project.projectName}
                  className={styles.projectImage}
                />
                <h3>{project.projectName}</h3>
              </Link>
              <p>{project.oneLineDescription}</p>
            </div>
          ))}
        </div>
      </div>

    </Layout>
  )

}

export const query = graphql`
  {
    allContentfulProject {
      nodes {
        id
        projectName
        slug
        oneLineDescription
        heroImage {
          gatsbyImageData
        }
      }
    }
  }
`

export const Head = () => <Seo title="Projects" />
export default ProjectsPage