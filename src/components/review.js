import React from 'react'
import '../styles/review.css'

const Review = () => {
  return (
    <div>
        <div className='testimonial text-center'> 
            <h2>Client's Review</h2>
        </div>
        <section container-fluid>
        
        <div class='client-review row text-center'>
            
            <div class="col-md-6">
                <div class="card" >
                    <div class="card-body">
                        <p className='client-words'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nihil consectetur dolorem dignissimos quas. Perferendis similique architecto</p>
                        <h5 class="client-name card-title ">Angela</h5>
                        <h6 class="client-country card-subtitle mb-2 text-muted ">Abuja, <span>Nigeria</span></h6>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card" >
                    <div class="card-body">
                        <p className='client-words'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nihil consectetur dolorem dignissimos quas. Perferendis similique architecto</p>
                        <h5 class="client-name card-title ">Abdul</h5>
                        <h6 class="client-country card-subtitle mb-2 text-muted ">Sokoto, <span>Nigeria</span></h6>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card" >
                    <div class="card-body">
                        <p className='client-words'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nihil consectetur dolorem dignissimos quas. Perferendis similique architecto</p>
                        <h5 class="client-name card-title ">Walter</h5>
                        <h6 class="client-country card-subtitle mb-2 text-muted ">Nairobi, <span>Kenya</span></h6>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card" >
                    <div class="card-body">
                        <p className='client-words'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nihil consectetur dolorem dignissimos quas. Perferendis similique architecto</p>
                        <h5 class="client-name card-title ">Paul</h5>
                        <h6 class="client-country card-subtitle mb-2 text-muted ">Accra, <span>Ghana</span></h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    
  )
}

export default Review
