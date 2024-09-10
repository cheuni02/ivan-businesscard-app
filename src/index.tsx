import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";

// Create the root and render the App component
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
