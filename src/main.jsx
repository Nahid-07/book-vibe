import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { Root } from './components/root/Root.jsx';
import { ErrorPage } from './components/errorPage/ErrorPage.jsx';
import { Home } from './components/Home/Home.jsx';
import { Listed_books } from './components/listed-books/Listed_books.jsx';
import { BookDetails } from './components/bookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/bookdetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch(`/booksData.json`)
      },
      {
        path: '/listed-books',
        element: <Listed_books></Listed_books>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
