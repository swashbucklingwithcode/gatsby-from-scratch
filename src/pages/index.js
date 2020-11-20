import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'

const Index = ({ data }) => {
  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
        ]}
        title={data.site.siteMetadata.title}
      />
      <h1>The homepage</h1>
      {data.allMarkdownRemark.edges.map(({ node: post }) => (
        <Link to={post.fields.slug}>
          <h3>{post.frontmatter.title}</h3>
          <p>{post.frontmatter.date}</p>
          <p>{post.excerpt}</p>
          <p>A lovely {post.timeToRead} minute read.</p>
        </Link>
      ))}
    </Layout>
  )
}

export const homepageQuery = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "dddd, MMMM Do YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Index
