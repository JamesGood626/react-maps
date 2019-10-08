import { GET_EVENT_LIST } from "../actions/list";
// import {helperFunction} from '../helpers'

const initialState = {
  list: [],
  getEventListError: null
};

export default function listReducer(
  listState = initialState,
  { type, payload }
) {
  console.log("inside listReducer w/ payload: ", payload);
  if (type === GET_EVENT_LIST)
    return { ...listState, list: payload.events };
  return listState;
}
