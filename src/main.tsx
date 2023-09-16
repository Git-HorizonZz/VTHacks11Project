import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
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
    path: '/about',
    element: <App content={'about'} />
  },
  {
    path: '/contact',
    element: <App content={'contact'} />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
