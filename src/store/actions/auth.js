export const SET_USER = "SET_USER";
export const SET_SIGNUP_ERROR = "SET_SIGNUP_ERROR";

// NOTE:
// success response when hitting /api/users/signup
// {
//   "username": "testuser8",
//   "message": "You've successfully signed up!"
// }
// Expected to be passed in as the object argument to setUser

export const setUser = ({ username }) => ({
  type: SET_USER,
  payload: {
    currentUser: username
  },
  meta: {
    trigger:
      "User signup or signin was successful and currentUser is being set."
  }
});

export const setSignupError = error => {
  console.log("the console.log of signup error: ");
  console.log(error);
  console.log("the console.dir of signup error: ");
  console.dir(error);
};
