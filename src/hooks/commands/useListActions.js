import { useDispatch } from "react-redux";
import { apiRequest } from "../../store/actions/api";
import { getEventList, getEventListError } from "../../store/actions/list";
import { LIST_URL } from "../../APIEndpoints";

// NOTE:
// Had to break out the action dispatcher helper functions from outside of useAuthActions
// so they may be used when testing the mocked store.
// Otherwise this error is received when testing the mocked store and attempting
// to invoke the signupUser yields this error:
// Invariant Violation: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
//     1. You might have mismatching versions of React and the renderer (such as React DOM)
//     2. You might be breaking the Rules of Hooks
//     3. You might have more than one copy of React in the same app
//     See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.

export const listEvent = dispatch => center => {
  console.log('center: ', center)
  dispatch(
    apiRequest({
      method: "GET",
      url: LIST_URL,
      payload: center,
      onSuccess: listEventSuccess(dispatch),
      onError: listEventError(dispatch)
    })
  )
}

export const listEventSuccess = dispatch => events => {
  console.log("Events in listEventSuccess: ", events)
  dispatch(getEventList(events))
}

export const listEventError = dispatch => ({error}) => {
    console.log("inside listEventError", error)
    dispatch(getEventListError({error}))
}

export function useListActions() {
  const dispatch = useDispatch();

  return {
    listEvent: listEvent(dispatch)
  };
}
