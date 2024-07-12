import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Login } from './Pages/Login.jsx'
import { Dashboard } from './Pages/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/Dashboard',
    element:<Dashboard/>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
