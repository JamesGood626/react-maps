import { SET_USER } from "../actions/auth";
// import {helperFunction} from '../helpers'

const initialState = {
  currentUser: null,
  signupUserError: null,
  signinUserError: null
};

const loadUser = () => {
  try {
    let serializedUser = localStorage.getItem('currentUser')

    if (serializedUser === null){
      return initialState
    } else {
      console.log('in loadUser', serializedUser)
      initialState.currentUser = JSON.parse(serializedUser)
      return initialState
    }
  }
  catch (err){
    return initialState
  }
}

export default function authReducer(
  authState = loadUser(),
  { type, payload }
) {
  console.log("inside authReducer w/ payload: ", payload);
  if (type === SET_USER) {
    console.log('inside authReducer w/ type===SET_USER')
    return { ...authState, currentUser: payload.currentUser };
  }
  return authState;
}
