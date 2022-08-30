import { createSlice } from "@reduxjs/toolkit";

export const strengthSlice = createSlice({
  name: 'strength',
  initialState: {
    value: -10
  },
  reducers: {
    setStrength: (state, action) => {      
      state.value = action.payload;
    }
  }
})

export const { setStrength } = strengthSlice.actions;
export default strengthSlice.reducer;