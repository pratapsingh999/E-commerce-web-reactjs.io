import React, { useState } from "react";
import "./App.css";
import Nav from "./nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./rout";
import Footer from "./footer";
import Productdetail from "./productdetails";

// import Product from './product';
// import {Route , Routes} from 'react-router-dom';
// import Home from './home';
// import Product from './product';
// import About from './about';
// import Contact from './contact';
 
function App() {
//add to  cart
const [cart , setCart] = useState([]);

  //product detail
  const [close , setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  //fiter products search
  const [product, setProduct] = useState(Productdetail);

  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(change);
  };

  //product details
  const view = (product) => {
    setDetail([{...product }]);
    setClose(true);
  };

  //add to cart
  const addtocart = (product) => 
  {
    const exsit = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("This Product is already added to cart")
    }
    else
    { 
      setCart([...cart, {...product, qty:1}])
      alert("product is added to cart")
    }
  } 
  console.log(cart) 
  return (
    <div className="App">
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}

          cart={cart}
          setCart={setCart}
          addtocart={addtocart}
        />
        <Footer />
        {/*  */}
        {/* <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
