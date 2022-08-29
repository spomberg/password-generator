import { createSlice } from "@reduxjs/toolkit";

export const lengthSlice = createSlice({
  name: 'length',
  initialState: {
    value: 0
  },
  reducers: {
    setLength: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setLength } = lengthSlice.actions;
export default lengthSlice.reducer;