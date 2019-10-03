import { useDispatch } from "react-redux";
import { locationRequest, setLocation, setLocationError } from "../../store/actions/location";
// import { LOCATION_URL } from "../../APIEndpoints";

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
export const getLocation = dispatch => locationData => {
  console.log("getLocation: ", locationData);
  dispatch(
    locationRequest({
      method: 'GET-GEOLOCATION',
      url: null,
      payload: locationData,
      onSuccess: getLocationSucess(dispatch),
      onError: getLocationError(dispatch)
    })
  );
};

export const getLocationSucess = dispatch => ({center}) => {
  console.log("the location in getLocationSucess: ", {center});
  dispatch(setLocation({center}));
};

const getLocationError = dispatch => ({ error }) => {
  console.log("inside getLocationError", error);
  dispatch(setLocationError({ error }));
};

export function useLocationActions() {
  const dispatch = useDispatch();

  return {
    getLocation: getLocation(dispatch)
  };
}
