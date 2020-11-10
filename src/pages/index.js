import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'

const Index = ({ data }) => {
  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: data.site.siteMetadata.description }]}
        title={data.site.siteMetadata.title}
      />
      <h1>The homepage</h1>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Tree on a grassy hill in sunset"
      />
      <p>
        <span>
          Photo by{' '}
          <a href="https://unsplash.com/@itfeelslikefilm?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Janko Ferlič
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/s/photos/trees?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </p>
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
    file(relativePath: { eq: "janko-ferlic-sundown-field.jpg" }) {
      publicURL
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
        fluidWebp: fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Index
