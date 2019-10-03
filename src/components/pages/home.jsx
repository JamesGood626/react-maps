import React, { useEffect } from "react";
import { useUi } from "../../hooks/queries/useUi";
import { useAuth } from "../../hooks/queries/useAuth";
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

  return (
    <div>
      <h1>Home</h1>
      {loading ? "Submitting..." : <AuthForm />}
    </div>
  );
}
