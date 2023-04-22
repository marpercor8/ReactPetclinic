import { useState } from 'react'
import './styles/css/header.css'
import './styles/css/petclinic.css'
import './styles/css/responsive.css'
import './styles/css/typography.css'
import { Menu } from './components/Menu/Menu'
import { StockPage } from './pages/stock/Index'
import { ProductPage } from './pages/products/Index'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Page } from './pages/Index'
import { Welcome } from './pages/welcome/Welcome'


const router = createBrowserRouter([
  {
    path: "/stock",
    element: <Page children={<StockPage />} />,
  },
  {
    path: "/products",
    element: <Page children={<ProductPage />} />,
  },
  {
    path: "/",
    element: <Page children={<Welcome />} />,
  },
]);


function App({children}) {
  return (
    <RouterProvider router={router} />
  )
}

export default App
