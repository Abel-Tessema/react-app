import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
// import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
      {/*<ReactQueryDevtools />*/}
  </React.StrictMode>,
)
