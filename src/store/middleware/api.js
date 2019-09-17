const API_REQUEST = "API_REQUEST";

export const apiMiddleware = ({ dispatch }) => next => action => {
  console.log("Inside the middleware w/ action: ", action);
  if (action.type === API_REQUEST) {
    console.log("action.type === API_REQUEST");
    // return makeRequest(dispatch, action, action.meta);
  }
  console.log("calling next(action) in middleware");
  next(action);
};
