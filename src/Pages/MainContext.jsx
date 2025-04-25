import React, { createContext, useEffect, useState } from 'react'
export const Context = createContext();
import { ToastContainer, toast } from 'react-toastify';

function MainContext({ children }) {

  

  const oldCartData = JSON.parse(localStorage.getItem("CART")) ?? [];
  const token = localStorage.getItem("token") ?? '';
  const [Cart, setCart] = useState(oldCartData);
  const [user, setUser] = useState(token);

  useEffect(
    () => {
     localStorage.setItem("CART", JSON.stringify(Cart));
    }, [Cart]
  )
  useEffect(
    () => {
      localStorage.setItem("token", user);
    }, [user]
  )

  

  return (
    <>
      <Context.Provider value={{ Cart, setCart, user, setUser }} >

        {children}
        <ToastContainer autoClose={1000} 
            position="top-center"  />

      </Context.Provider>

    </>
  )
}

export default MainContext