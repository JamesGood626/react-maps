import { SET_USER } from "../actions/auth";
// import {helperFunction} from '../helpers'

const initialState = {
  currentUser: null,
  signupUserError: null,
  signinUserError: null
};

export default function authReducer(
  authState = initialState,
  { type, payload }
) {
  console.log("inside authReducer w/ payload: ", payload);
  if (type === SET_USER)
    return { ...authState, currentUser: payload.currentUser };
  return authState;
}
