import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './navbar'

// <=== Routes ===>//
import { Welcome } from './Welcome'
import Menu from './Menu'
import ToolTip from './ToolTip'
import Timer from './Timer'

class Main extends Component {
  render () {
    return (
      <Router>
        <Fragment>
          <Nav />
          <Container>
            <Route exact path='/' component={Welcome} />
            <Route path='/menu' component={Menu} />
            <Route path='/tooltip' component={ToolTip} />
            <Route path='/timer' component={Timer} />
          </Container>
        </Fragment>
      </Router>
    )
  }
}

const Container = styled.div`
  margin: 3rem 10rem 0;
  font-size: 2rem;

  @media(max-width: 800px) {
    margin: 2rem 6rem 0;
    font-size: 1.5rem;
  }
`

export default Main
