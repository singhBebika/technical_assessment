import {configureStore} from "@reduxjs/toolkit";
import spellListReducer from "./reducer/spellListReducer";

export const store = configureStore({
  reducer: {
    spells: spellListReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
