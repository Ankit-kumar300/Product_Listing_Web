import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Links } from 'react-router'

function Filter({slug , setRanting , rating , setPrice, price}) {
 
  const [AllgetCategories , setAllgetCategories] = useState([])

    const getCategories=()=>{
        axios.get("https://dummyjson.com/products/categories").then(
            (succes)=>{
                setAllgetCategories(succes.data);
               
            }
        ).catch(
        (error)=>{
             console.log(error);
             
        }
        )
    }

    const fromPrice = (event)=>{
        if(event.target.value >=0 ){
            setPrice({...price , from : event.target.value})
        }
       
        
    }
    const toPrice = (event)=>{
        if(event.target.value >=0 ){
            setPrice({...price , to : event.target.value}) 
        }
      
        
    }

    useEffect(
        ()=>{
            getCategories();
        },[]
    )

  return (
    < >
  <div className='m-3 md:m-6'>
  <h1 className='text-xl md:text-2xl font-bold mb-4'>Filter By Category</h1>
  
  <div className='space-y-2'>
    <div onClick={() => setRanting(4)} className={`py-2 px-3 border rounded-lg cursor-pointer ${rating == 4 ? 'bg-blue-500 text-white' : ''}`}>⭐ 4 Above</div>
    <div onClick={() => setRanting(3)} className={`py-2 px-3 border rounded-lg cursor-pointer ${rating == 3 ? 'bg-blue-500 text-white' : ''}`}>⭐ 3 Above</div>
    <div onClick={() => setRanting(2)} className={`py-2 px-3 border rounded-lg cursor-pointer ${rating == 2 ? 'bg-blue-500 text-white' : ''}`}>⭐ 2 Above</div>
    <div onClick={() => setRanting(1)} className={`py-2 px-3 border rounded-lg cursor-pointer ${rating == 1 ? 'bg-blue-500 text-white' : ''}`}>⭐ 1 Above</div>
  </div>

  <h1 className='text-xl md:text-2xl font-bold mb-4 mt-6'>Filter By Price</h1>
  <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3'>
    <input onChange={fromPrice} type="number" placeholder='From' className='w-full sm:w-24 px-2 py-1 border rounded' value={price.from} />
    <span className='text-sm font-medium'>to</span>
    <input onChange={toPrice} type="number" placeholder='To' className='w-full sm:w-24 px-2 py-1 border rounded' value={price.to} />
  </div>

  <div className='mt-6'>
    <Link to={'/shop'}>
      <div className={`border rounded-lg px-4 py-3 my-3 font-semibold cursor-pointer text-center ${slug === undefined ? 'bg-blue-500 text-white' : ''}`}>
        All Categories
      </div>
    </Link>

    <div className='space-y-2'>
      {AllgetCategories.map((Data, index) => (
        <Link to={`/Shop/${Data.slug}`} key={index}>
          <div className={`border rounded-lg px-4 py-2 cursor-pointer text-sm sm:text-base ${Data.slug == slug ? 'bg-blue-500 text-white' : ''}`}>
            {Data.name}
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>

    </>
  )
}

export default Filter