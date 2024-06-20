import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './App'
import { Provider } from 'react-redux'
import { store } from './Store'

let ele = document.getElementById("root")
let rootEl= ReactDOM.createRoot(ele)
rootEl.render(
  <div>
    <Provider store={store}>
    <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  
  </div>
)

