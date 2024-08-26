import React from 'react';

import './App.css'



import { createBrowserRouter, RouterProvider } from "react-router-dom"

import NotFound from './componant/notfound/Notfound';
import Register from './componant/register/register';
import Login from './componant/login/login';

import Home from './componant/home/home';

import Layout from './componant/layout/Layout';
import ProtectedRoute from './componant/protectedroute/protectedroute';
import AcountContextProvider from './Context/AcountContext';
import Cart from './componant/cart/cart';
import PDitals from './componants/pDitals/pDitals';
import ForgotPassword from './componants/forgetPassword/forgetPassword';
import ResetPassword from './componants/resatPassword/resatPassword';
import Verfycode from './componants/verfycode/verfycode';
import Box from './componants/Box/Box';


function App() {
  
let x= createBrowserRouter(
[
  { path: '', element: <Layout/>, children:[
    {index: true ,element: <ProtectedRoute>
      <Home/>
    </ProtectedRoute>
      
     },

    { path: 'cart',element: <ProtectedRoute>
      <Cart/>
    </ProtectedRoute>},
    { path: 'prodactDitals/:id',element: <ProtectedRoute>
      <PDitals/>
    </ProtectedRoute>},


    { path: 'Verfycode',element: <Verfycode/>},

    { path: 'resitepassword',element: <Box/>},
    { path: 'forget',element: <ForgotPassword/>},
    { path: 'ResetPassword',element: <ResetPassword/>},
    { path: 'login',element: <Login/>},
    { path: 'register',element: <Register/>},
    { path: '*',element: <NotFound/>},

  ]}
]
 )

  return (
 <AcountContextProvider>

  <RouterProvider router={x}>

 </RouterProvider>
 </AcountContextProvider>



  )
}

export default App
