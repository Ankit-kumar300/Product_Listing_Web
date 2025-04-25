import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router';
import { Context } from '../Pages/MainContext';
import ProductDitels from '../Pages/ProductDitels';
import { ToastContainer, toast } from 'react-toastify';


function Product({slug , rating , price} ) {

    const [AllProduct , setAllProduct] = useState([]);
    const [Limit,SetLimit] = useState(10);
     const {Cart  , setCart} = useContext(Context)
     
    
    
    
    

   
    

   const getProducts=()=>{
    let Apiurl = `https://dummyjson.com/products?limit=${Limit}`;

    if(slug != undefined){
     Apiurl =`https://dummyjson.com/products/category/${slug}?limit=${Limit}`
    }

    axios.get(Apiurl).then(
        (succes)=>{
            const Finaldata = succes.data.products.filter(
            (data , index)=>{
               
                
             if(data.rating >= rating && data.price >= price.from && data.price <=price.to ){
                   return true
                 
                   
             }
                  
                
               
            }
            )
           
          
            


            setAllProduct(Finaldata);
           
            
            
            

        }
    ).catch(
        (error)=>{
           console.log(error);
           
        }
    )

   }

   useEffect(
    ()=>{
        getProducts() ;
    },[slug ,Limit , rating , price]
   )

    return (
        <>
        <h1 className='font-semibold p-2'> Total Product :{AllProduct.length} </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 bg-gray-100 min-h-screen">
                {
                   AllProduct.map(
                    (product , index)=>{
                        return(
                            <ProductCard key={index} product={product} Cart ={Cart} setCart={setCart} />
                        )
                    }
                    
                   ) 
                }
                
              
         

            </div>
            <div className='text-center'>
            <button  onClick={()=>SetLimit(Limit+10)}  className="w-[200px] text-center bg-pink-600 text-white py-2 rounded-xl hover:bg-blue-400 transition duration-200">
                        load more
           </button>
            </div>

        </>
    )
}



function ProductCard({product , Cart , setCart }) {
   
     const addTocart = ()=>{
       const {id, price ,thumbnail , category , title } = product;

       const  Proditelis = {id, price ,thumbnail , category , title , qty:1 };

      const matchProduct = Cart.filter(
        (CartData , CartIndex)=>{
             return CartData.id ==  Proditelis.id
        }
      )

      if(matchProduct.length ==0){
        const finaldata = [...Cart ,Proditelis ]
        setCart(finaldata);
        toast.success("Added in Cart")
        
      }else{
        toast.error("alredy in Cart")
      }

    
  
      } 
    
 
    
    
    
    return (
        <>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
                <Link to={`/ProductDitels/${product.id}`}>
                    <img 
                        src={product.thumbnail} 
                        alt="Product"
                        className="w-full h-72 object-cover" 
                    />
                    <div className="p-5 space-y-2">
                        <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
                        <p className="text-sm text-gray-500">Category: <span className="font-medium text-gray-700">{product.category}</span></p>
                        <p className="text-sm text-gray-500">Brand: <span className="font-medium text-gray-700">{product.brand}</span></p>
                        <p className="text-sm text-gray-500">Rating <span className="font-medium text-gray-700">{product.rating}/5</span></p>
                        <p className="text-lg font-semibold text-pink-600">₹{product.price}</p>
                    </div>
                </Link>
                
                <div className="p-5 pt-0">
                    <button   onClick={addTocart} className="w-full bg-pink-600 text-white py-2 rounded-xl hover:bg-blue-400 transition duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default Product

