import { configureStore } from '@reduxjs/toolkit';
import textReducer from './features/text/textSlice';

export default configureStore({
  reducer: {
    text: textReducer
  },
});