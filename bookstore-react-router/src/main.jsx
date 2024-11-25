import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import NotFound from './components/NotFound.jsx'
import Book from './components/BookList.jsx'
import HomePage from './components/HomePage.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      errorElement: <NotFound/>,
    children: [
    {
      path: "books/:bookId",
      element: <Book/>,
    },
    ],
  },
  {
    path: "/home",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
