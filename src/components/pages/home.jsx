import React, { useEffect } from "react";
import { useUi } from "../../hooks/queries/useUi";
import { useAuth } from "../../hooks/queries/useAuth";
import { useUiActions } from "../../hooks/commands/useUiActions";
import AuthForm from "../shared/authForm";

export default function Home() {
  const { loading } = useUi();
  const { currentUser } = useAuth();
  const { toggleLoaderTrue, toggleLoaderFalse } = useUiActions();

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

  if (currentUser === null) {
    return (
      <div>
        <h1>Home</h1>
        {loading ? "Submitting..." : <AuthForm />}
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome: {currentUser}</h1>
      <div>Da premium contentz</div>
    </div>
  );
}
