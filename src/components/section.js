import React from "react"
import styles from "./section.module.css"
import { useStaticQuery, graphql } from "gatsby"
import ProjectPreview from './projectPreview'

export default (props) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              type
              title
              githuburl
              language
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    
    <div className={styles.section}>
      <h2>{props.name}</h2>
      <div className={styles.project_list}>
        {data.allMarkdownRemark.edges
          .filter(({node}) => node.frontmatter.type === props.type)
          .map(({node}) => (
              <ProjectPreview node={node} key={node.id}></ProjectPreview>
          ))
        }
      </div>
    </div>
  )
}
