
import React, { useState } from 'react'
import Product from '../Common/Product'
import Filter from '../Common/Filter'
import { useParams } from 'react-router'

function Shop() {

  const { slug } = useParams();
  const [rating , setRanting] = useState(1);
  const [price , setPrice] = useState({from : 0 , to : 1000})
  
  
  
  return (
    <div className='grid grid-cols-6'>
        <div className='col-span-1'><Filter  slug={slug} setRanting={setRanting} rating={rating} price={price} setPrice={setPrice} /></div>
        <div className='col-span-5'><Product slug={slug} rating={rating}  price ={price} /></div>

    </div>
  )
}

export default Shop