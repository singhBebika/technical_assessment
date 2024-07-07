import {createAsyncThunk} from "@reduxjs/toolkit";
import {FETCH_SPELL} from "../constant";
import axios from "axios";
import {removeFalsyKeys} from "@src/hooks/object";

export const fetchSpells = createAsyncThunk(FETCH_SPELL, async (params: {name: string}) => {
  const formattedParams = removeFalsyKeys({name: params.name});
  const response = await axios.get("https://www.dnd5eapi.co/api/spells", {
    params: formattedParams,
  });
  return response.data;
});
