import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import index from './index.css'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './App'

let ele = document.getElementById("root")
let rootEl= ReactDOM.createRoot(ele)
rootEl.render(
  <div>
    <App/>
  {/* <RouterProvider router={appRouter}></RouterProvider> */}
  </div>
)
