import React from 'react'
import { graphql } from 'gatsby'
// import treeInForest from '../images/veeterzy-tree-in-forest.jpg'

const Index = ({ data }) => {
  return (
    <div>
      <h1>The homepage</h1>
      <img src={data.file.publicURL} alt="Tree in Forest" style={{ maxWidth: 800 }} />
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
    file(relativePath: {eq: "veeterzy-tree-in-forest.jpg"}) {
      publicURL
    }
  }
`

export default Index
