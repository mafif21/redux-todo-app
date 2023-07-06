import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    value: 0,
  },
  reducers: {
    addFav: (state) => {
      state.value += 1;
    },
  },
});

export const { addFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
