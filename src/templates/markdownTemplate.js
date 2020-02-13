import React from 'react'
import {graphql, Link} from 'gatsby'
import Container from '../components/container'

export default ({data}) => {
    const post = data.markdownRemark
    return (
        <Container>
            <h1>{post.frontmatter.title}</h1>
            <h2>{post.frontmatter.language}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.html }}/>
            <Link to={post.frontmatter.githuburl}>
                View on Github
            </Link>
        </Container>
    )
}
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
        frontmatter {
            title
            githuburl
            language
        }
        html
        }
    }
  
`