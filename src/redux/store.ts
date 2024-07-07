import {configureStore} from "@reduxjs/toolkit";
import spellListReducer from "./reducer/spellReducer";
import spellDescReducer from "./reducer/spellDescReducer";

export const store = configureStore({
  reducer: {
    spells: spellListReducer,
    spellDesc: spellDescReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
