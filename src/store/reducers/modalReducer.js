import { TOGGLE_MODAL } from "../actions/modal";
// import {helperFunction} from '../helpers'

const initialState = {
  toggle_modal: false
};

export default function modalReducer(modalState = initialState, { type, payload }) {
  console.log("inside modalReducer w/ payload: ", payload);
  if (type === TOGGLE_MODAL)
    return { ...modalState, toggle_modal: payload.modalVisible };
  return modalState;
}
