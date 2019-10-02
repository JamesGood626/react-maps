import { createStore, applyMiddleware, compose } from "redux";
import { apiMiddleware } from "./middleware/api";
import { rootReducer } from "./reducers";
import { saveState, loadState } from "./reducers/stateLoader"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  loadState(),
  composeEnhancers(applyMiddleware(apiMiddleware))
);
store.subscribe(() => {
  saveState(store.getState())
})



// applyMiddleware(apiMiddleware)
