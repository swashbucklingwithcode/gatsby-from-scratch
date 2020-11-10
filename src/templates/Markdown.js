import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'

const Markdown = ({ data }) => {
  const { markdownRemark } = data

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: data.site.siteMetadata.description }]}
        title={`${markdownRemark.frontmatter.title} | ${data.site.siteMetadata.title}`}
      />
      <h1>{markdownRemark.frontmatter.title}</h1>
      <h2>{markdownRemark.frontmatter.description}</h2>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: {eq: $slug }}) {
      html
      frontmatter {
        description
        title
      }
    }
  }
`

export default Markdown
