import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: 'text',
  initialState: {
    value: 'P4$5W0rD!'
  },
  reducers: {
    setText: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setText } = textSlice.actions;
export default textSlice.reducer;