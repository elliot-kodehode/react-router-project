import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from "./pages/HomePage"
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BookListPage from './pages/BookListPage'
import NotFoundPage from './pages/NotFoundPage'
import BookPage from './pages/BookPage'

const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage/>
  },

  {
    path: "/books",
    element: <BookListPage />
  },
  {
    path: "/books/:bookId",
    element: <BookPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
