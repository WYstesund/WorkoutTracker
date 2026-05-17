// App entrypoint. Mounts the React tree into the #root div from index.html.
// Kept deliberately tiny so the rest of the app lives in App.jsx and its children.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
