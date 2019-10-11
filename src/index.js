import React from 'react';
import { TipsProvider } from "./hooks/customHooks.js";
import { render } from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
//import { ThemeProvider } from '@material-ui/styles';
//import theme from './theme';


render(
  <TipsProvider>
    <CssBaseline />
    <App />
  </ TipsProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


