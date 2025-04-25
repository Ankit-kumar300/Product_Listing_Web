import React, { useContext, useEffect, useState } from 'react'
import { Context } from './MainContext'
import { Link } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

function Cart() {
  
    const {Cart , setCart} = useContext(Context);
    const [price , setPrice]= useState(0)

    useEffect(
      ()=>{
         let totalCartprice = 0
       Cart.forEach(
        (CartData , CartIndex)=>{
          totalCartprice  +=(CartData.price * CartData.qty)
        }
       )
       setPrice(totalCartprice)
      },[Cart]
    )

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
      {/* Left: Cart Items */}
      <div className="flex-1 space-y-6">
        {/* Cart Item Card */}
        {
            Cart.length ==0
            ?
            <h1 className='text-red-700 font-bold'>Cart Not Found !</h1>
            :
            Cart.map(
                (CartData , CartIndex)=>{
                  // console.log(CartData)
                    return(
                        <CartRow CartData={CartData} CartIndex ={CartIndex} key={CartIndex} Cart={Cart} setCart={setCart}  /> 
                    )
                }
            )
        }
      
      



        
      </div>
      {/* Right: Summary */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow h-fit">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>₹{price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>₹{(price *10/100).toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-4">
          <span>Total</span>
          <span>₹{(price+(price*10/100)).toFixed(2)}</span>
          
        </div>
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300">
          Checkout
        </button>
      </div>
    </div>
  </div>
  
  

  )
}

   function CartRow( {CartData , CartIndex , Cart , setCart}){
   const DeleteCartrow = (index)=>{
    // console.log(CartData);
    
      
    const CartData = [ ...Cart];
    CartData.splice(index,1)
    setCart(CartData)
       toast.success("item Deleted")

       
     
   }

    const qtyUpadte=(event , indexNum)=>{
     const oldCartData =[...Cart];
     oldCartData[indexNum].qty = event.target.value;
     setCart(oldCartData);
     console.log(setCart);
     
      
    }
   

   return(<>
   
   <div className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-between">
          {/* Product Image */}
          <img
            src={CartData.thumbnail}
            alt="Product"
            className="w-24 h-24 object-cover rounded-md"
          />
          {/* Product Info */}
          <div className="flex-1">
            <Link  to={`/ProductDitels/${CartData.id}`}>
            <h3 className="text-lg font-semibold">{CartData.title}</h3>
            </Link>
            <p className="text-sm text-gray-500">{CartData.category}</p>
            <p className="text-base font-medium mt-1">{CartData.price}</p>
            
            <div className="mt-2 flex items-center gap-2">
              <label className="text-sm text-gray-600">Quantity:</label>
              <input
                type="number"
                defaultValue={CartData.qty}
               
                min={1}
                className="w-16 px-2 py-1 border rounded-md text-center"
                onChange={(event)=>qtyUpadte(event , CartIndex)}
             
              />
            </div>
          </div>
          {/* Remove Button */}
          <button onClick={()=>DeleteCartrow(CartIndex)} className="mt-4 sm:mt-0 text-red-500 hover:text-red-700 font-semibold transition duration-200">
            Remove
          </button>
        </div>
   </>)
   }


export default Cart