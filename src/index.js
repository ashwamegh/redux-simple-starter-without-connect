import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";

// Variables containing Action types
const INC = "INC";
const DEC = "DEC";

// Our reducer (root reducer for now) for the initializing store
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INC:
      return Object.assign({}, state, {
        count: state.count + action.payload.value
      });
    case DEC:
      return Object.assign({}, state, {
        count: state.count - action.payload.value
      });
    default:
      return state;
  }
};

// our redux store holder
const store = createStore(counterReducer);

// Action creators for the counter actions
const actionsCreators = {
  incrementActionCreator: () => ({ type: INC, payload: { value: 1 } }),
  decrementActionCreator: () => ({ type: DEC, payload: { value: 1 } })
};

// Store Listener
const listenStore = () =>
  render(
    <App state={store.getState()} actions={actionsCreators} store={store} />,
    document.getElementById("root")
  );

// Subscribing listenStore function to listen and subscribe the state changes
store.subscribe(listenStore);

// Callin the function to render the updated state
listenStore();

registerServiceWorker();
