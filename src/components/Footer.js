import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Whiterose Care Home. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Designed with care and compassion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
