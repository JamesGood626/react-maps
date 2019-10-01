import React from "react";
import { BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom'
import { useAuth } from "../hooks/queries/useAuth";
import Routes from './shared/routes'



function App() {
  const { currentUser } = useAuth();

  return (
    <Router>
      <Routes currentUser = {currentUser} />
    </Router>
  );
}

export default App;
