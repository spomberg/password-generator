import { createSlice } from "@reduxjs/toolkit";

export const hasNumbersSlice = createSlice({
  name: 'hasNumbers',
  initialState: {
    value: false
  },
  reducers: {
    setNumbers: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setNumbers } = hasNumbersSlice.actions;
export default hasNumbersSlice.reducer;