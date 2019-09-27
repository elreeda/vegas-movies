import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import NavBar from 'components/NavBar'

import Home from 'views/Home'
import Discovery from 'views/Discovery'
import WatchList from 'views/WatchList'
import Favorites from 'views/Favorites'
import Search from 'views/Search'
import Movie from 'views/Movie'

const Layout = styled.div`
  max-width: 1340px;
  padding: 0 30px;
  margin: 0 auto;
`

const Routes = () => {
  return (
    <Layout>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/discovery" component={Discovery} />
          <Route path="/watchlist" component={WatchList} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
    </Layout>
  )
}

export default Routes
