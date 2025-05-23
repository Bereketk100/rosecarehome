import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-600 text-white py-6 border-t-2 border-rose-300">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="text-rose-300">Whiterose Care Home</span>. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Designed with care and compassion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
