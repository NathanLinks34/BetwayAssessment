import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LandingPage from "./Frontend/LandingPage";
import Navbar from "./Frontend/Navbar";
import Tabs from "./Frontend/Tabs";
import CookiePopup from "./Frontend/Popup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Tabs />
    <LandingPage />
    <br />
    <CookiePopup />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
