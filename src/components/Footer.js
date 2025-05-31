import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-600 text-white py-6 border-t-2 border-rose-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img
            src="/whiteroselogo.png"
            alt="Whiterose Care Homes Logo"
            className="h-12 object-contain mb-2"
          />
          <p className="text-sm">
            &copy; {new Date().getFullYear()} <span className="text-rose-300">Whiterose Care Homes</span>. All rights reserved.
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm">2206 NE Kelly Avenue</p>
          <p className="text-sm">Gresham, OR 97030</p>
          <p className="text-sm">Phone: 971-274-3043</p>
          <p className="text-sm">Email: whiterosecarehomes@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
