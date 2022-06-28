import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// context
import { YachtGalleryContextProvider } from "./context/YachtContext.js";
import { YachtPhotoContextProvider } from "./context/YachtPhotoContext";
import { LightboxContextProvider } from "./context/LightboxContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LightboxContextProvider>
    <YachtGalleryContextProvider>
      <YachtPhotoContextProvider>
        <App />
      </YachtPhotoContextProvider>
    </YachtGalleryContextProvider>
  </LightboxContextProvider>
);
