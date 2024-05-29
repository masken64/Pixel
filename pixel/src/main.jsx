import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from './routes.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(routes);
document.body.style.margin = 0;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
