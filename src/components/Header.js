import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-500 text-white py-5 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">Whiterose Care Homes</h1>
        <nav className="space-x-8">
          <a
            href="/"
            className="text-lg font-medium hover:underline hover:underline-offset-4 transition-all"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-lg font-medium hover:underline hover:underline-offset-4 transition-all"
          >
            Services
          </a>
          <a
            href="#team"
            className="text-lg font-medium hover:underline hover:underline-offset-4 transition-all"
          >
            Our Team
          </a>
          <a
            href="#contact"
            className="text-lg font-medium hover:underline hover:underline-offset-4 transition-all"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
