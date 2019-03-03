import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
  <Layout>
    <h1>Layout posts</h1>
    {data.allMarkdownRemark.edges.map(post =>(
        <div key = {post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted by {post.node.frontmatter.author}</small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        </div>
    ))}
  </Layout>
)

export const pageQuery = graphql `
query BlogIndexQuery {
allMarkdownRemark{
    edges{
      node {
        frontmatter{
          path
          title
          author
          
        }
        excerpt
      }
    }
  }
}
`

export default BlogPage