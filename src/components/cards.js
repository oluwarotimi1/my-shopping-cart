import React from 'react'
import '../styles/amazon.css'

const Cards = ({ item, handleClick }) => {
    const {title, author, price, img} = item;
  return (
    <>
      <div className="wrapper-flex">
      <div className="container">
        <img src={img} alt="" className='profile-img' />
        <h1 className="name">{title}</h1>
        <p className="description">{author}</p>
        <p className='price'>${price}</p>
        <button onClick={() => handleClick(item)} className="btn">Add to Cart</button>
        </div>
      </div>
    </>
    
  )

  }
export default Cards
