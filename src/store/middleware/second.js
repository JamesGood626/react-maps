const API_REQUEST = "API_REQUEST";

export const secondMiddleware = ({ dispatch }) => next => action => {
  console.log("Inside the second middleware w/ action: ", action);
  if (action.type === API_REQUEST) {
    console.log("action.type === API_REQUEST");
    // return makeRequest(dispatch, action, action.meta);
  }
  console.log("calling next(action) in second middleware");
  next(action);
};
