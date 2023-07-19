import React from 'react'
import {Route , Routes} from 'react-router-dom';
import Home from './home';
import Product from './product';
import About from './about';
import Contact from './contact';
import Cart from './cart';

function Rout({product,setProduct,detail,view,close,setClose,cart,setCart,addtocart}) {
  return (
         <Routes>
    <Route path='/' element={<Home detail={detail}  view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
    <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail}  view={view} close={close}
          setClose={setClose} addtocart={addtocart}/>}/>
  
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/cart' element={<Cart  cart={cart} setCart={setCart} addtocart={addtocart}/>}/>    
    </Routes>
  )
}

export default Rout