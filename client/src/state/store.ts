import { configureStore } from "@reduxjs/toolkit";
import { globalSlice } from "state";


const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
