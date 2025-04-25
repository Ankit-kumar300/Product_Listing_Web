import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from './MainContext';

function ProductDitels() {
  
     const {ProductId} = useParams();
  
     const [currntProduct , setAllcurrntProduct] = useState({});
     const {Cart , setCart} = useContext(Context)

     const getProductDitels=()=>{
        axios.get(`https://dummyjson.com/products/${ProductId}`).then(
            (success)=>{
                setAllcurrntProduct(success.data);
                console.log(success.data);
                
                
                
            }
        ).catch(
            (error)=>{
              console.log(error);
              
            }
        )
        
     }

     const addtocart = () =>{
      const {id, price ,thumbnail , category , title } = currntProduct;

       const  Proditelis = {id, price ,thumbnail , category , title , qty:1 };
       const finaldata =[...Cart , Proditelis]
       setCart(finaldata)

     }

     useEffect(
        ()=>{
            getProductDitels(); 
        },[]
     )
     

  return (
   <>
   <div className ="bg-gray-100">
   <div className="max-w-7xl mx-auto p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 rounded-2xl shadow-xl">
    {/* Product Images */}
    <div>
      <div className=" overflow-hidden">
        <img
          src={currntProduct.thumbnail}
          alt="Main"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex gap-3 mt-4">
        {
            currntProduct?.images?.map(
                (imageData , imageIndex)=>{
                  console.log(imageData);
                  
                   return(
                    <img
                    src={imageData} key={imageIndex}
                    className="w-20 h-20 rounded-lg border hover:ring-2 ring-blue-500 transition-all duration-200"
                  />
                   )
                }
            )
        }

        
       
     
      
      </div>
    </div>
    {/* Product Details */}
    <div className="flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          {currntProduct.title}
        </h1>
        <p className="text-3xl text-green-600 font-bold mb-2">₹{currntProduct.price}</p>
        <div className="flex items-center gap-2 text-yellow-500 mb-4">
          <span className="text-xl">⭐</span>
          <span className="font-medium text-lg text-gray-700">
            {currntProduct.rating}/5
          </span>
        </div>
        <p className="text-gray-600 text-md leading-relaxed mb-6">
          {currntProduct.description}
        </p>
        <button onClick={addtocart} className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition">
          Add to Cart 🛒
        </button>
      </div>
      {/* Reviews */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Customer Reviews
        </h2>
        <div className="space-y-4">

         <div className="bg-gray-50 p-4 rounded-lg border">
            
            <p className="font-semibold text-gray-800">Ankii 💙</p>
            <p className="text-gray-600">Best phone ever 😍</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="font-semibold text-gray-800">Aarya ✨</p>
            <p className="text-gray-600">
              Looks stunning and performs flawlessly!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


   </div>
   </>
  )
}

export default ProductDitels