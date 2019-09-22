import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import NavBar from 'components/NavBar'

import Home from 'views/Home'
import Search from 'views/Search'

const Layout = styled.div`
  max-width: 1340px;
  padding: 0 30px;
  margin: 0 auto;
  > div:nth-child(2) {
    background-color: red;
  }
`

const Routes = () => {
  return (
    <Router>
      <Layout>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default Routes
