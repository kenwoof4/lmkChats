import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { SideBarContextProvider } from "./context/SideBarContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <SideBarContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SideBarContextProvider>
    </ChatContextProvider>
  </AuthContextProvider>
);
