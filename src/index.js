import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// context
import { YachtGalleryContextProvider } from "./context/YachtContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <YachtGalleryContextProvider>
    <App />
  </YachtGalleryContextProvider>
);
