import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvier } from "./common/context/authContextProvider";
import { EditorContextProvier } from "./common/context/editorContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthContextProvier>
      <EditorContextProvier>
        <App />
      </EditorContextProvier>
    </AuthContextProvier>
  </BrowserRouter>
  // </React.StrictMode>,
);
