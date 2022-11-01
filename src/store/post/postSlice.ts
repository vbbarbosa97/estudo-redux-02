import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { estadoInicial, Post } from "./postState";

export const postSlice = createSlice({
  name: "post",
  initialState: estadoInicial,
  reducers: {
    adicionarPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
  },
});
