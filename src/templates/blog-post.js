import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({data}) {
  const post = data.markdownRemark;
  const { title} = post.frontmatter;
  return (
      <Layout>
          
          <div>
              <h1>{post.frontmatter.title}</h1> 
              <h4>Posted by {post.frontmatter.author}</h4>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
      </Layout>
  )
}


export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
      }
    }
  }
`


