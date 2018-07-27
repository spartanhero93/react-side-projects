import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = props => {
  return (
    <Navbar>
      <h3>Mini Projects</h3>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu Component</Link>
        <Link to='/tooltip'>Tooltip Component</Link>
        <Link to='/timer'>Timer Component</Link>
      </ul>
    </Navbar>
  )
}

const Navbar = styled.nav`
  background-color: #4EB1BA;
  color: #222930;
  padding: 1rem 3rem;

  h3 {
    font-weight: 100;
    font-size: 2rem;
    text-align: center;
  }

  ul > * {
    margin: 0 2rem;
    color: white;
    text-decoration: none;
    font-size: 3rem;
  }
  ul > *:hover {s
    text-decoration: underline;
  }

  @media(max-width: 800px) {
    padding: 1rem 2rem;
    
    ul > * {
      display: flex;
      flex-direction: column;
      margin: 0 1rem;
      font-size: 1.5rem;
      padding-bottom: 1rem;
    }
  }
`
export default Nav
