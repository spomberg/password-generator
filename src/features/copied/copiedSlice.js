import { createSlice } from "@reduxjs/toolkit";

export const copiedSlice = createSlice({
  name: 'copied',
  initialState: {
    value: false
  },
  reducers: {
    setCopied: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setCopied } = copiedSlice.actions;
export default copiedSlice.reducer;