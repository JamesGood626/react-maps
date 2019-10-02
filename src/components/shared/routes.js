import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import Home from "../pages/home"
import Map from "../pages/map"


function Routes({ currentUser }) {
  return (
    <Route exact path="/">
      {currentUser ? <Map /> : <Home />}
    </Route>
  )
  }
  export default withRouter(Routes);