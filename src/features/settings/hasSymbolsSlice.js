import { createSlice } from "@reduxjs/toolkit";

export const hasSymbolsSlice = createSlice({
  name: 'hasSymbols',
  initialState: {
    value: false
  },
  reducers: {
    setSymbols: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setSymbols } = hasSymbolsSlice.actions;
export default hasSymbolsSlice.reducer;