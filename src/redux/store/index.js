import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "../reducers/queryReducer";

const store = configureStore({
  reducer: queryReducer,
});

export default store;
