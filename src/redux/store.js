import { useState } from "react";
import { createStore, combineReducers } from 'redux';

const reducer = (state, action) => {
    return state;
  };
  
  const initialState = {
  };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;