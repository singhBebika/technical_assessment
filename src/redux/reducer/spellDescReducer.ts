import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SpellDecriptionState, SpellDescription} from "../interface";
import {fetchSingleSpell} from "../action/spellAction";

const initialState: SpellDecriptionState = {
  singleSpell: {},
  isLoading: false,
  error: null,
};

const spellDecList = createSlice({
  name: "singleSpell",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleSpell.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleSpell.fulfilled, (state, action: PayloadAction<SpellDescription>) => {
        state.singleSpell = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSingleSpell.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default spellDecList.reducer;
