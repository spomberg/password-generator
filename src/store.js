import { configureStore } from '@reduxjs/toolkit';
import textReducer from './features/text/textSlice';
import copiedReducer from './features/copied/copiedSlice';

export default configureStore({
  reducer: {
    text: textReducer,
    copied: copiedReducer
  },
});