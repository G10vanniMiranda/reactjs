import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import App from './App.jsx'
import { Courses } from "./pages/Courses"
import { Training } from "./pages/Training"
import { Product } from "./pages/Product"

const router = createBrowserRouter([
  { path: "/",         element: <App /> },
  { path: "/courses",  element: <Courses /> },
  { path: "/training", element: <Training /> },
  { path: "/product",  element: <Product /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
