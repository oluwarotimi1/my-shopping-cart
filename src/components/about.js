import React from 'react'
import '../styles/about.css'

const About = () => {
  return (
    <section className='about' id='about'>
        <h1 className='heading'><span>About</span> Us</h1>
        <p>Crowns Store is the trading name of Royal coast Technologies Limited. We strive to deliver the benefits of technology to individual and his communities. We aim to achieve this by partnering with local and international resources to deliver the optimal solution for our customers <span><a href='#'>Read More...</a></span></p>
        <div className='row'>
            <div className='col video-container'>
                <video src='../images/about-vid.mp4' loop autoplay muted ></video>
                <h3>Best Iphone Sellers</h3>
            </div>
            <div className='col content'>
                <h3>Why Choose Us</h3>
                <p className='lorem123'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nihil consectetur dolorem dignissimos quas. Perferendis similique architecto, natus est a sapiente earum explicabo veritatis quo assumenda, cupiditate, minima aperiam tenetur?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nihil consectetur dolorem dignissimos quas. Perferendis similique architecto, natus est a sapiente earum explicabo veritatis quo assumenda, cupiditate, minima aperiam tenetur?</p>
            </div>
        </div>
    </section>
  )
}

export default About
