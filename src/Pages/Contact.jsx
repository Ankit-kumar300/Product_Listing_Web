import React, { useContext } from 'react'
import { Context } from './MainContext'

function Contact() {


  return (

    <div className="min-h-screen bg-gray-100 py-10 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-lg overflow-hidden">
      
      {/* Left - Info */}
      <div className="bg-gradient-to-br from-pink-500 to-indigo-600 text-white p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-extrabold mb-4">Get in Touch</h2>
          <p className="text-lg">We’d love to hear from you. Let’s talk!</p>
        </div>
        <div className="mt-10 space-y-4">
          <div>
            <h4 className="font-bold">Email</h4>
            <p>support@shopkart.com</p>
          </div>
          <div>
            <h4 className="font-bold">Phone</h4>
            <p>+91 9876543210</p>
          </div>
          <div>
            <h4 className="font-bold">Address</h4>
            <p>Bangalore, Karnataka, India</p>
          </div>
        </div>
        <div className="mt-10">
          <iframe
            className="w-full h-40 rounded-xl"
            src="https://maps.google.com/maps?q=Bangalore%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>

      {/* Right - Form */}
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Full Name</label>
            <input type="text" placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email Address</label>
            <input type="email" placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea rows="5" placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
            ></textarea>
          </div>
          <button type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact