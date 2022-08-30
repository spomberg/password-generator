import { createSlice } from "@reduxjs/toolkit";

export const hasUpperCaseSlice = createSlice({
  name: 'hasUpperCase',
  initialState: {
    value: false
  },
  reducers: {
    setUpperCase: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setUpperCase } = hasUpperCaseSlice.actions;
export default hasUpperCaseSlice.reducer;