import React, { useEffect } from "react";
import { useUi } from "../../hooks/queries/useUi";
import { useUiActions } from "../../hooks/commands/useUiActions";

export default function Home() {
  const { loading } = useUi();
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

  return (
    <div>
      <h1>Home</h1>
      {loading ? "LOADING" : "NOTHING"}
    </div>
  );
}
