import React from 'react'
import {  LogIn, ShoppingCart, XCircle } from "lucide-react";
import Headar from './Common/Headar';
import Footer from './Common/Footer';
import { Routes } from "react-router-dom"
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './Pages/Home';
import Layout from './Layout';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import ProductDitels from './Pages/ProductDitels';
import MainContext from './Pages/MainContext';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Ragister from './Pages/Ragister';



const router = createBrowserRouter(
  [
    {
      path : '/',
      element:<Layout/>,
      children :[
        {
          path:"/Home",
          element:<Home/>
        },
        {
          path:"/About",
          element:<About/>
        },
        {
          path:"/Shop/:slug?",
          element:<Shop/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path :"/ProductDitels/:ProductId",
          element:<ProductDitels/>
        },
        {
          path :'/cart',
          element:<Cart/>
        },
        {
         path:'/login',
        element: <Login/>
        },
        {
          path:'/ragister',
          element:<Ragister/>
        }
      ]
    }
   
      
    
  ]
) 

function App() {
  return (

     <MainContext>
      <RouterProvider router={router}/>

     </MainContext>    
   

    

  )
}

export default App