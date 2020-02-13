import React from "react"
import Container from "../components/container"
import Section from "../components/section"
import Navigation from "../components/navigation"
import { Link, graphql } from "gatsby"

export default ({ data }) => (
  <Container>
    <h1>Hello World</h1>
    {/* <h4>{data.allMarkdownRemark.totalCount}</h4> */}
    {/* {data.allMarkdownRemark.edges
      .filter(({ node }) => node.frontmatter.type === "school-projects")
      .map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            <h2>{node.fields.slug}</h2>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))} */}
      <Section name="School projects" type="school-projects"></Section>
      <Section name="Crash courses" type="crash-course"></Section>
  </Container>
)
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            type
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
