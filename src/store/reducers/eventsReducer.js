import { SET_EVENT } from "../actions/events";
// import {helperFunction} from '../helpers'

const initialState = {
  events: [],
  createEventError: null
};

export default function eventsReducer(
  eventsState = initialState,
  { type, payload }
) {
  console.log("inside eventsReducer w/ payload: ", payload);
  if (type === SET_EVENT)
    return { ...eventsState, events: [ ...eventsState.events, payload.event ] };
  return eventsState;
}
