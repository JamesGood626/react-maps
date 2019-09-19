import React, { useState } from "react";
import { useAuthActions } from "../../hooks/commands/useAuthActions";

const initialSignupDataState = {
  email: "",
  username: "",
  password: ""
};

export default function AuthForm() {
  const { signupUser } = useAuthActions();
  const [signupData, setSignupData] = useState(initialSignupDataState);

  const updateSignupData = key => ({ target: { value } }) =>
    setSignupData({ ...signupData, [key]: value });

  const handleSubmit = e => {
    e.preventDefault();
    signupUser(signupData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        value={signupData.email}
        onChange={updateSignupData("email")}
      />
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        value={signupData.username}
        onChange={updateSignupData("username")}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={signupData.password}
        onChange={updateSignupData("password")}
      />
      <button>Submit</button>
    </form>
  );
}
