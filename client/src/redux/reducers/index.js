// src/redux/reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
// Import individual reducers here
import someReducer from './someReducer';

const rootReducer = combineReducers({
  some: someReducer,
  // add other reducers here
});

export default rootReducer;
