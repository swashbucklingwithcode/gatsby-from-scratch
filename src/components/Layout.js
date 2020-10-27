import React from 'react'
import styled from '@emotion/styled'

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

const Footer = ({ light }) => {
  return (
    <StyledFooter light={light}>
      &copy; Copyright 2020
      <ul className="links-column">
        <li><a href="">First</a></li>
        <li><a href="">Second</a></li>
        <li><a href="">Third</a></li>
        <li><a href="">Fourth</a></li>
        <li><a href="">Fifth</a></li>
      </ul>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  background: #372e28;
  color: #f3eee4;
  background-color: ${(props) => props.light ? 'oldlace' : '#372e28'};
  color: ${(props) => props.light ? '#372e28' : '#f3eee4'};

  a {
    color: red;
    text-decoration: none;
  }
`

export default Layout
