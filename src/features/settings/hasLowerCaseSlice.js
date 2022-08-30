import { createSlice } from "@reduxjs/toolkit";

export const hasLowerCaseSlice = createSlice({
  name: 'hasLowerCase',
  initialState: {
    value: false
  },
  reducers: {
    setLowerCase: (state) => {
      state.value = !state;
    }
  }
})

export const { setLowerCase } = hasLowerCaseSlice.actions;
export default hasLowerCaseSlice.reducer;