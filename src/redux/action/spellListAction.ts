import {createAsyncThunk} from "@reduxjs/toolkit";
import {Spell} from "../interface";
import {FETCH_SPELL} from "../constant";

export const fetchSpells = createAsyncThunk<Spell>(FETCH_SPELL, async () => {
  const response = await fetch("https://www.dnd5eapi.co/api/spells");
  const data = await response.json();
  return data;
});
