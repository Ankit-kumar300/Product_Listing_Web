import React from 'react'

function Home() {
  return (
    <>
    <div className='mt-14'>
  <section className="bg-indigo-600 text-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Discover the Best Products at Amazing Prices
      </h2>
      <p className="text-lg mb-6">
        Your one-stop destination for quality and variety
      </p>
      <a
        href="#"
        className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
      >
        Browse Products
      </a>

      {/* <button  className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"  >   Browse Products</button> */}
    </div>
  </section>
  </div>
 
</>

  )
}

export default Home