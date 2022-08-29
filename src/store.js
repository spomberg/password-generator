import { configureStore } from '@reduxjs/toolkit';
import textReducer from './features/text/textSlice';
import copiedReducer from './features/copied/copiedSlice';
import lengthReducer from './features/length/lengthSlice';

export default configureStore({
  reducer: {
    text: textReducer,
    copied: copiedReducer,
    length: lengthReducer
  },
});