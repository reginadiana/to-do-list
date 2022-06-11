import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
const store = createStore(rootReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
