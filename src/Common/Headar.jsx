import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, XCircle, Menu } from 'lucide-react';
import { Context } from '../Pages/MainContext';
import { ToastContainer, toast } from 'react-toastify';

function Header() {
  const { Cart, setCart, setUser, user } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!user && location.pathname !== '/ragister') {
      navigate('/login');
    }
  }, [location.pathname]);

  const userlogout = () => {
    setUser('');
    navigate('/login');
  };

  return (
    <header className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <div className="text-3xl font-extrabold text-white tracking-wide">
          <span className="text-yellow-300">Shop</span>Kart
        </div>

        {/* Hamburger Icon */}
        {user && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        )}

        {/* Desktop Nav + Buttons */}
        {user ? (
          <div className="hidden md:flex items-center space-x-6">
            {/* Nav Links */}
            <nav className="flex space-x-8 text-white text-lg font-medium">
              <Link to='/Home' className="hover:text-black transition duration-200">Home</Link>
              <Link to='/About' className="hover:text-black transition duration-200">About</Link>
              <Link to='/Shop' className="hover:text-black transition duration-200">Shop</Link>
              <Link to='/Contact' className="hover:text-black transition duration-200">Contact</Link>
            </nav>

            {/* Cart & Buttons */}
            <Link to='/cart'>
              <button className="relative text-white hover:text-yellow-300 transition">
                <ShoppingCart size={26} />
                <span className="absolute -top-2 -right-2 bg-yellow-300 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {Cart.length}
                </span>
              </button>
            </Link>

            <button onClick={() => setCart([])} className="flex items-center gap-1 bg-white text-pink-600 hover:bg-yellow-300 hover:text-black px-4 py-2 rounded-xl text-sm font-semibold shadow-sm transition duration-200">
              <XCircle size={18} />
              Clear Cart
            </button>

            <button onClick={userlogout} className="flex items-center gap-1 bg-white text-pink-600 hover:bg-yellow-300 hover:text-black px-6 py-2 rounded-xl text-sm font-bold shadow-sm transition duration-200">
              Logout
             
                              
              
            </button>
          </div>
        ) : (
          <Link to='/login'>
            <button className="flex items-center gap-1 bg-white text-pink-600 hover:bg-yellow-300 hover:text-black px-6 py-2 rounded-xl text-sm font-bold shadow-sm transition duration-200">
              Login
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      {user && mobileMenuOpen && (
        <div className="md:hidden bg-white text-pink-600 py-4 px-6 space-y-4">
          <Link to='/Home' className="block font-semibold hover:text-black" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to='/About' className="block font-semibold hover:text-black" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to='/Shop' className="block font-semibold hover:text-black" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link to='/Contact' className="block font-semibold hover:text-black" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

          <div className="flex items-center justify-between pt-4 border-t">
            <Link to='/cart'>
              <button className="relative hover:text-yellow-300 transition">
                <ShoppingCart size={26} />
                <span className="absolute -top-2 -right-2 bg-yellow-300 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {Cart.length}
                </span>
              </button>
            </Link>

            <button onClick={() => setCart([0])} className="text-sm font-semibold hover:text-black">
              Clear Cart
            </button>

            <button onClick={userlogout} className="text-sm font-semibold hover:text-black">
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
