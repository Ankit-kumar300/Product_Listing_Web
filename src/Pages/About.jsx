import React from 'react'

function About() {
  return (
   <div  className='bg-gray-100 text-gray-800'>
    <>
 
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-6">
        About Us
      </h2>
      <p className="max-w-3xl mx-auto text-center text-lg text-gray-700">
        At ShopEasy, we believe shopping should be simple, affordable, and
        enjoyable. Our mission is to offer a wide range of quality products that
        cater to every need and budget.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To become the most customer-centric online shopping platform by
            consistently delivering value and satisfaction.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Why Choose Us?</h3>
          <p className="text-gray-600">
            We prioritize customer service, quick delivery, and top-notch
            product quality to make your experience seamless.
          </p>
        </div>
      </div>
    </div>
  </section>

</>

   </div>
  )
}

export default About