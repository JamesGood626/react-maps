import React, {useEffect} from "react";
import { BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom'
import { useAuth } from "../hooks/queries/useAuth";
import Routes from './shared/routes'




function App() {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser !== null){
      localStorage.setItem('currentUser', currentUser)
    }
  }, [currentUser])

  return (
    <Router>
      <Routes currentUser = {currentUser} />
    </Router>
  );
}

export default App;
