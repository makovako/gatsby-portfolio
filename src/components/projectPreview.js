import React from "react"
import styles from "./projectPreview.module.css"
import { Link } from "gatsby"

export default props => {
  let node = props.node
  return (
    <div className={styles.project_preview}>
      <h2>{node.frontmatter.title}</h2>
      <h3>Language: {node.frontmatter.language}</h3>
      <Link to={node.fields.slug}>Read more</Link>
      <Link to={node.frontmatter.githuburl}>View on Github</Link>
    </div>
  )
}
