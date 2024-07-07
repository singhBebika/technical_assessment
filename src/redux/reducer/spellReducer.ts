// src/spellSlice.ts
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Spell, SpellState} from "../interface";
import {fetchSpells} from "../action/spellAction";

const initialState: SpellState = {
  spells: {},
  isLoading: false,
  error: null,
};

const spellList = createSlice({
  name: "spells",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpells.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSpells.fulfilled, (state, action: PayloadAction<Spell>) => {
        state.spells = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSpells.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default spellList.reducer;
