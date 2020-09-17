import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Index = ({ data }) => {
  console.log(data.file.childImageSharp)
  return (
    <div>
      <h1>The homepage</h1>
      <Img fluid={data.file.childImageSharp.fluid} alt="the sweet tree" />
      <p>
        <span>
          Photo by{' '}
          <a href="https://unsplash.com/@veeterzy?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            veeterzy
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </p>
    </div>
  )
}

export const homepageQuery = graphql`
  query HomepageQuery {
    file(relativePath: { eq: "veeterzy-tree-in-forest.jpg" }) {
      absolutePath
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index
