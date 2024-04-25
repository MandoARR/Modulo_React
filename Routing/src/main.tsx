import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { List } from './components/List.tsx'
import { Detalle } from './components/Detalle.tsx'
import { RoolLayout } from './routes/RootLayout.tsx'


const routerConfig = createBrowserRouter([
  {
    path: "/", element: <RoolLayout />, children: [
      { path: "/", element: <App /> },
      { path: "/lista", element: <List /> },
      { path: "/otro", element: <Detalle /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>,
)
