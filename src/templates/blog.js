import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery} from 'gatsby'

export const query = graphql`
    query($slug: String) {
      markdownRemark(fields: {slug: {eq: $slug } }) {
        frontmatter {
          title
          date
        }
        html
      }
    }
  `

const Blog = (props) => {
  console.log("props is ", props)
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.title}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html} }></div>
    </Layout>
  )
}

export default Blog;