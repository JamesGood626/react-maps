import { combineReducers } from "redux";
import uiReducer from "./uiReducer";
import authReducer from "./authReducer";
import eventsReducer from "./eventsReducer";
import locationReducer from "./locationReducer";
import modalReducer from "./modalReducer"

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  events: eventsReducer,
  location: locationReducer,
  modal: modalReducer
});
