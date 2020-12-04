import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'

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
        <PostCard to={post.fields.slug}>
          <h3 className="title">{post.frontmatter.title}</h3>
          <p className="ttr">{post.timeToRead} minute read</p>
          <p className="excerpt">{post.excerpt}</p>
          <p className="date">{post.frontmatter.date}</p>
        </PostCard>
      ))}
    </Layout>
  )
}

const PostCard = styled(Link)`
  display: block;
  margin: 0 0 2rem;
  color: var(--text);
  text-decoration: none;
  background: #f3eee4;
  padding: 1rem 1.5rem;
  border-radius: 5px;

  .title {
    margin: 0 0 0.3rem;
    font-size: 20px;
  }
  .ttr {
    margin: 0 0 0.7rem;
    font-size: 14px;
    color: #ae4900;
  }
  .excerpt {
    margin: 0 0 0.5rem;
    font-size: 16px;
  }
  .date {
    display: inline-block;
    margin: 0;
    background-color: #726c68;
    color: oldlace;
    border-radius: 999px;
    padding: 3px 10px;
    font-size: 12px;
  }
`

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
