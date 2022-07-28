import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppProvider from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const reRenderTree = () => {
  root.render(<AppProvider />);
};

reRenderTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default reRenderTree;
