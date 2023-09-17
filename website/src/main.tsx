import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './style.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App content={''} />
  },
  {
    path: '/search',
    element: <App content={'search'} />
  },
  {
    path: '/contact',
    element: <App content={'contact'} />
  },
  {
    path: '/profile',
    element: <App content={'profile'} />
  },
  {
    path: '/results',
    element: <App content={'results'} />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
