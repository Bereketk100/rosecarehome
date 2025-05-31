import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-green-700 to-green-600 text-white py-4 shadow-lg border-b-2 border-rose-300">
      <div className="container mx-auto px-6">
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/whiteroselogo.png" 
              alt="Whiterose Care Homes Logo" 
              className="h-16 object-contain mr-auto" 
            />
          </a>
          <nav className="space-x-8">
            <a href="/" className="text-lg font-medium hover:text-rose-300 transition-all">Home</a>
            <a href="#services" className="text-lg font-medium hover:text-rose-300 transition-all">Services</a>
            <a href="#team" className="text-lg font-medium hover:text-rose-300 transition-all">Our Team</a>
            <a href="#contact" className="text-lg font-medium hover:text-rose-300 transition-all">Contact</a>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden justify-between items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/dd.png" 
              alt="Whiterose Care Homes Logo" 
              className="h-12 object-contain" 
            />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-green-800 rounded-lg">
            <nav className="flex flex-col space-y-3 items-center">
              <a 
                href="/" 
                className="text-lg font-medium hover:text-rose-300 transition-all px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-lg font-medium hover:text-rose-300 transition-all px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#team" 
                className="text-lg font-medium hover:text-rose-300 transition-all px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </a>
              <a 
                href="#contact" 
                className="text-lg font-medium hover:text-rose-300 transition-all px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
