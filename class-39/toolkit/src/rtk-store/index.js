// configureStore
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import peopleSlice from './people';
const reducers = combineReducers({people: peopleSlice});
// thunk middleware is enabled
// extension is enabled too
const store = configureStore({reducer: reducers});

export default store;