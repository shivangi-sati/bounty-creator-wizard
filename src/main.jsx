import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { BountyFormProvider } from "./context/BountyFormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BountyFormProvider>
        <App />
      </BountyFormProvider>
    </BrowserRouter>
  </React.StrictMode>
);

