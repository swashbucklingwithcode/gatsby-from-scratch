import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      &copy; Copyright 2020
    </footer>
  )
}

export default Layout
