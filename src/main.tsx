import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ToastProvider } from "./components/ToastProvider";
import { PasswordProvider } from "./components/PasswordManager";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <PasswordProvider>
          <App />
        </PasswordProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);
