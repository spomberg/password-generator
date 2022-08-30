import { createSlice } from "@reduxjs/toolkit";

export const hasUpperCaseSlice = createSlice({
  name: 'hasUpperCase',
  initialState: {
    value: false
  },
  reducers: {
    setUpperCase: (state) => {
      state.value = !state;
    }
  }
})

export const { setUpperCase } = hasUpperCaseSlice.actions;
export default hasUpperCaseSlice.reducer;