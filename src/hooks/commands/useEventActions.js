import { useDispatch } from "react-redux";
import { apiRequest } from "../../store/actions/api";
import { setEvent, setCreateEventError } from "../../store/actions/events";
import { EVENT_URL } from "../../APIEndpoints";

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
export const createEvent = dispatch => eventData => {
  console.log("eventData: ", eventData);
  dispatch(
    apiRequest({
      method: "POST",
      url: EVENT_URL,
      payload: eventData,
      onSuccess: createEventSucess(dispatch),
      onError: createEventError(dispatch)
    })
  );
};

export const createEventSucess = dispatch => (event) => {
  console.log("the Event in createEventSuccess: ", event);
  dispatch(setEvent(event));
};

const createEventError = dispatch => ({ error }) => {
  console.log("inside createEventError", error);
  dispatch(setCreateEventError({ error }));
};

export function useEventActions() {
  const dispatch = useDispatch();

  return {
    createEvent: createEvent(dispatch)
  };
}
