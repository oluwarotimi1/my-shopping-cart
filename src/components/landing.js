import React from 'react'
import '../styles/landing.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Cart from "./components/cart";

const Landing = () => {
  return (
    <section className='home'>
        <div className='home-content'>
          {/* <h4>Crown Stores</h4> */}
          <span> Phone And Laptop Accessories </span>
          {/* <p><span className='real'>Real factory base in China, No middle man</span> </p> */}
         <br /> <a href='#' className='btn-shop-now' > Shop Now <ShoppingCartIcon className='shop-cart' /></a>
        </div>
       </section>
  )
}

export default Landing;
