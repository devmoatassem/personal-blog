import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvier } from './common/context/authContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvier>
        <App />
      </AuthContextProvier>
    </BrowserRouter>
  // </React.StrictMode>,
)
