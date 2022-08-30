import { createSlice } from "@reduxjs/toolkit";

export const hasLowerCaseSlice = createSlice({
  name: 'hasLowerCase',
  initialState: {
    value: false
  },
  reducers: {
    setLowerCase: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setLowerCase } = hasLowerCaseSlice.actions;
export default hasLowerCaseSlice.reducer;