import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import './i18next'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
        <I18nextProvider i18n={i18next}>
        <BrowserRouter>
      <App />
    </BrowserRouter>
        </I18nextProvider>
  </Provider>
);
