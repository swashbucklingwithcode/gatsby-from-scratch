import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Index = ({ data }) => {
  return (
    <div>
      <h1>The homepage</h1>
      <img
        style={{ maxWidth: '100%' }}
        src={data.file.publicURL}
        alt="Tree on a grassy hill in sunset"
      />
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Tree on a grassy hill in sunset"
      />
      <Img
        fluid={data.file.childImageSharp.fluidWebp}
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
    </div>
  )
}

export const homepageQuery = graphql`
  query HomepageQuery {
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
