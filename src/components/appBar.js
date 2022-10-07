import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge  from '@mui/material/Badge';
import '../styles/appBar.css'

const MyNavbar = ({setShow}) => {
  return (
    <nav class="navbar navbar-expand-lg bg-light main-nav-bar"  >
    <div class="container-fluid nav-bar ">
        <a class="navbar-brand" href="#" onClick={()=>{setShow(true)}}>CROWN STORES</a>
        <a class="shop-cartt nav-link"  href='#' onClick={()=>{setShow(false)}}>
            <Badge badgeContent={0} color="secondary"  >
               <ShoppingCartIcon className='shop-cart' />
            </Badge>
        </a>
    <button class="navbar-toggler main-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#" onClick={()=>{setShow(true)}}>Home</a>
        <a class="nav-link" href="#" onClick={()=>{setShow(true)}}>Products</a>
        <a class="nav-link" href="#">Contact</a>
        <a class="nav-link" href='#' onClick={()=>{setShow(false)}}>Cart 
            <Badge badgeContent={1} color="secondary" >
               <ShoppingCartIcon />
            </Badge>
        </a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default MyNavbar
