import React, { useEffect } from "react";
import { useUi } from "../../hooks/queries/useUi";
import { useAuth } from "../../hooks/queries/useAuth";
import { useLocation } from "../../hooks/queries/useLocation";
import { useUiActions } from "../../hooks/commands/useUiActions";
import { useLocationActions } from "../../hooks/commands/getLocationActions"
import AuthForm from "../shared/authForm";

// Info needed for creating event:
// name
// address: { 
//   street,
//   city,
//   state,
//   zip
// }
// Will be retrieved via Google API:
// lat
// lon
// initialComment
// eventDate <- will be retrieved via JavaScript (current time)

export default function Home() {
  const { loading } = useUi();
  const { currentUser } = useAuth();
  const { center } = useLocation();
  const { toggleLoaderTrue, toggleLoaderFalse } = useUiActions();
  const { getLocation } = useLocationActions()
  

  // useEffect(() => {
  //   const interval = setInterval(function() {
  //     if (loading) return toggleLoaderFalse();
  //     else return toggleLoaderTrue();
  //   }, 20000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [loading]);

  useEffect(() => {
    toggleLoaderFalse();
  }, []);

  useEffect(() => {
    return () => {console.log('inside home', currentUser)}
  }, [])

  
  console.log("this is from useLocation(): ", center)
    return (
      <div>
        <h1>Home</h1>
        {loading ? "Submitting..." : <AuthForm />}
      </div>
    );
}
