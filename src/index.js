import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './fonts/JetBrainsMono/JetBrainsMono-Italic-VariableFont_wght.ttf';
import './fonts/JetBrainsMono/JetBrainsMono-VariableFont_wght.ttf';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
