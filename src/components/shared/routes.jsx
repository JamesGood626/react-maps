import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import Home from "../pages/home";
import Map from "../pages/map";

function Routes({ currentUser }) {
  // if (!currentUser) {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/map" component={Map} />
    </>
  );
}
export default Routes;
