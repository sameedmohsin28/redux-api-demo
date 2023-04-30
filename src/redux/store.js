import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";

const store = configureStore({
  reducer: usersSlice.reducer
})

export default store;
