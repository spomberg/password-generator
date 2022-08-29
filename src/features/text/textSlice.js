import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: 'text',
  initialState: {
    value: 'P4$5W0rD!'
  },
  reducers: {
    setText: (newPassword) => {
      state.value = newPassword
    }
  }
});

export const { setText } = textSlice.actions;
export default textSlice.reducer;