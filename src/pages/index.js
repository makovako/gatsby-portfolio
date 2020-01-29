import React from "react"
import Container from "../components/container"
import Dog from "../components/dog"
import { Link, graphql } from "gatsby"

export default ({ data }) => (
  <Container>
    <Link to="/about">About</Link>
    <h1>Hello World</h1>
    <h4>{data.allMarkdownRemark.totalCount}</h4>
    {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
            <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            <h2>{node.fields.slug}</h2>
            <p>{node.excerpt}</p>
            </Link>
        </div>
    ))}
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
