

import './App.css'



import { createBrowserRouter, RouterProvider } from "react-router-dom"

import NotFound from './componant/notfound/Notfound';
import Register from './componant/register/register';
import Login from './componant/login/login';
import  { Toaster } from 'react-hot-toast';
import Home from './componant/home/home';

import Layout from './componant/layout/Layout';
import ProtectedRoute from './componant/protectedroute/protectedroute';


import Cart from './componant/cart/cart';
import PDitals from './componants/pDitals/pDitals';
import ForgotPassword from './componants/forgetPassword/forgetPassword';

import Verfycode from './componants/verfycode/verfycode';
import Box from './componants/Box/Box';
import CartContextProvider from './Context/cartContext/cartContext';
import Lodar2 from './componants/lodar/lodar2';
import ProdactHome from './componants/prodactHome/prodactHome';
import Categories from './componants/categories/categories';

import AcountContextProvider from './Context/AcountContext';

import WishContextProvider from './Context/wishContext/wishContext';
import Wishlist from './componant/wishlist/wishlist';
import Lodarwish from './componants/lodar/lodarwish';
import Brandes from './componant/brands/Brandes';
import ChikOut from './componant/ChikOut/ChikOut';
import Allorders from './componant/Allorders/Allorders';


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
    { path: 'cart.',element: <ProtectedRoute>
      <Lodar2/>
    </ProtectedRoute>},


    { path: 'prodact',element: <ProtectedRoute>
  <ProdactHome/>
    </ProtectedRoute>},
    { path: 'Wishlist',element: <ProtectedRoute>
<Wishlist/>
    </ProtectedRoute>},
    { path: 'Categories',element: <ProtectedRoute>
  <Categories/>
    </ProtectedRoute>},
    { path: 'Wishlist.',element: <ProtectedRoute>
  <Lodarwish/>
    </ProtectedRoute>},
    { path: 'Brandes',element: <ProtectedRoute>
  <Brandes/>
    </ProtectedRoute>},
    { path: 'ChikOut',element: <ProtectedRoute>
  <ChikOut/>
    </ProtectedRoute>},
    { path: 'allorders',element: <ProtectedRoute>
  <Allorders/>
    </ProtectedRoute>},



    { path: 'Verfycode',element: <Verfycode/>},

    { path: 'resitepassword',element: <Box/>},
    { path: 'forget',element: <ForgotPassword/>},
    { path: 'login',element: <Login/>},
    { path: 'register',element: <Register/>},
    { path: '*',element: <NotFound/>},

  ]}
]
 )

  return (
    
 <AcountContextProvider>
<CartContextProvider>
<WishContextProvider>
<Toaster/>

  <RouterProvider router={x}>

 </RouterProvider>
</WishContextProvider>
</CartContextProvider>
 </AcountContextProvider>



  )
}

export default App
