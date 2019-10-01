import { SET_LOCATION } from "../actions/location";
// import {helperFunction} from '../helpers'

const initialState = {
  center: {
    lat: 0,
    lng: 0
  },
  setLocationError: null
};

export default function locationReducer(
  locationState = initialState,
  { type, payload }
) {
  console.log("inside locationReducer w/ payload: ", payload);
  if (type === SET_LOCATION)
    return { ...locationState, center: payload.center };
  return locationState;
}
