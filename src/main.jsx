import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Shop from './component/Shop/Shop';
import Order from './component/Order/Order';
import OrderReview from './component/OrderReview/OrderReview';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import Error from './component/Error/Error';
import CartProductLoader from './CartProductLoader/CartProductLoader';

const router=createBrowserRouter([
  {
    path:'/', 
    element:<Home></Home>,
    children:[
      {
        path:'/', 
        element:<Shop></Shop>
      }, 
      { 
        path:'/order', 
        element:<Order></Order>,
        loader:CartProductLoader
      }, 
      { 
        path:'/order-review', 
        element:<OrderReview></OrderReview>
      }, 
      { 
        path:'/inventory', 
        element:<Inventory></Inventory>
      }, 
      { 
        path:'/login',  
        element:<Login></Login>
      }, 
      { 
        path:'*', 
        element: <Error></Error>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
