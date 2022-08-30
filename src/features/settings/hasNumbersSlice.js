import { createSlice } from "@reduxjs/toolkit";

export const hasNumbersSlice = createSlice({
  name: 'hasNumbers',
  initialState: {
    value: false
  },
  reducers: {
    setNumbers: (state) => {
      state.value = !state;
    }
  }
})

export const { setNumbers } = hasNumbersSlice.actions;
export default hasNumbersSlice.reducer;