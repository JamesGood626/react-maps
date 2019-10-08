import {
  TOGGLE_CREATE_EVENT_MODAL,
  TOGGLE_EVENT_DETAILS_MODAL
} from "../actions/modal";
// import {helperFunction} from '../helpers'

const initialState = {
  createEventModalVisible: false,
  eventDetailsModalVisible: false
};

export default function modalReducer(
  modalState = initialState,
  { type, payload }
) {
  console.log("inside modalReducer w/ payload: ", payload);
  if (type === TOGGLE_CREATE_EVENT_MODAL)
    return {
      ...modalState,
      createEventModalVisible: payload.createEventModalVisible
    };
  if (type === TOGGLE_EVENT_DETAILS_MODAL)
    return {
      ...modalState,
      event: payload.event,
      eventDetailsModalVisible: payload.eventDetailsModalVisible
    };
  return modalState;
}
