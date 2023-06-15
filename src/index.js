import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// Components
import App from "./App";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Context Providers
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { CurrentNotificationProvider } from "./contexts/NotificationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CurrentNotificationProvider>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </CurrentNotificationProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
