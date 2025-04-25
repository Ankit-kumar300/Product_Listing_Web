import React from 'react'
import { ShoppingCart, XCircle } from "lucide-react";

function Footer() {
  return (
    <>
     <footer className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white mt-16 shadow-xl">
  <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
    
    {/* Brand & Description */}
    <div>
      <h2 className="text-2xl font-extrabold mb-4 tracking-wide">Shop<span className="text-yellow-300">Kart</span></h2>
      <p className="text-gray-200">
        Premium products, best prices. Your one-stop E-commerce destination. Shop Smart, Live Better 🛍️
      </p>
    </div>

    {/* Quick Shop Links */}
    <div>
      <h3 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h3>
      <ul className="space-y-3 text-gray-100">
        <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition">About</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition">Shop</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition">Pages</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition">Contact</a></li>
      </ul>
    </div>

    {/* Customer Support */}
    <div>
      <h3 className="text-lg font-semibold mb-4 text-yellow-300">Support</h3>
      <ul className="space-y-3 text-gray-100">
        <li><a href="#" className="hover:text-yellow-300 transition">FAQs</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition">Returns</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition">Shipping Info</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition">Terms & Conditions</a></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h3 className="text-lg font-semibold mb-4 text-yellow-300">Join Newsletter</h3>
      <p className="mb-3 text-gray-200">Subscribe for latest deals & offers ✨</p>
      <form className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="you@example.com"
          className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
        />
        <button className="bg-yellow-300 text-black py-2 rounded-md font-semibold hover:bg-yellow-400 transition">
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="bg-black bg-opacity-30 text-center text-sm py-4 border-t border-white/10">
    © 2025 ShopKart. Built with ❤️ by Aarya & Ankii
  </div>
</footer>

    </>
  )
}

export default Footer