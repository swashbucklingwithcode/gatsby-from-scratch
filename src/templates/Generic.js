import React from 'react'
import Layout from '../components/Layout'

const Generic = ({ pageContext }) => {
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <p>{pageContext.description}</p>
      <p>you can put whatever</p>
    </Layout>
  )
}

export default Generic
