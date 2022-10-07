import React, {useState} from 'react'
import list from '../data'
import Cards from './cards'
import Grid from '@mui/material/Grid';
import '../styles/amazon.css'

const Amazon = ({ handleCLick }) => {
  const [cart, setCart] = useState([]);

  // const handleCLick = (item)=>{
  //   console.log(item);
  // };
  return (
        <section>
          <main className='amazon-content'>
           <div class='text-center'> 
              <h3 class='products'>PRODUCTS & ACCESSORIES </h3>
           </div>
            <Grid container alignItems="center" justifyContent="center" spacing={2} >
              {list.map((item)=>(
                <Grid key={item.id}  item xs={12} sm={6} md={4} lg={3} >
                 <Cards item={item} handleClick={handleCLick}/>
                </Grid>
              ))}
            </Grid>
          </main>
            
        </section>
  )
}

export default Amazon;