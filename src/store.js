import { configureStore } from '@reduxjs/toolkit';
import textReducer from './features/text/textSlice';
import copiedReducer from './features/copied/copiedSlice';
import lengthReducer from './features/length/lengthSlice';
import hasUpperCaseReducer from './features/settings/hasUpperCaseSlice';
import hasLowerCaseReducer from './features/settings/hasLowerCaseSlice';
import hasNumbersReducer from './features/settings/hasNumbersSlice';
import hasSymbolsReducer from './features/settings/hasSymbolsSlice';
import strengthReducer from './features/strength/strengthSlice';

export default configureStore({
  reducer: {
    text: textReducer,
    copied: copiedReducer,
    length: lengthReducer,
    hasUpperCase: hasUpperCaseReducer,
    hasLowerCase: hasLowerCaseReducer,
    hasNumbers: hasNumbersReducer,
    hasSymbols: hasSymbolsReducer,
    strength: strengthReducer
  },
});