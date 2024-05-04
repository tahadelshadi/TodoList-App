//React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//App
import App from './App';
import './index.css';
//redux
import { Provider } from 'react-redux';
import { store } from './redux/store';
//utils
import { ThemeProvider } from "@material-tailwind/react";
import CustomTheme from './utils/themeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider value={CustomTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter >
);
