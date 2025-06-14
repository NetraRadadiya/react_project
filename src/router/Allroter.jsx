import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Description from '../pages/Description'
import Product from '../pages/Product'
import Cart from '../pages/Cart'

import Create from '../pages/Create'


const Allroter = () => {
   return (
      <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/product' element={<Product />}></Route>
         <Route path='/description/:id' element={<Description />}></Route>
         
         <Route path='/login' element={<Login />}></Route>
         <Route path='/create' element={<Create />}></Route>
         <Route path='/cart' element={<Cart/>}></Route>

      </Routes>
   )

}

export default Allroter
