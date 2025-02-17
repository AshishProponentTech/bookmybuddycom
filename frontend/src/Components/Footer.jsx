import React from 'react'
import logo from "../assets/images/online-food-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left">
          
          {/* Logo & Description */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
            <img src={logo} alt="Book My Buddy Logo" className="h-8 sm:h-10 mr-4" />
            </div>
            <p className="text-sm mt-2">Complete Restaurant Management System with POS</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-orange-500">About us</a>
            <a href="#" className="hover:text-orange-500">Contact us</a>
            <a href="#" className="hover:text-orange-500">Terms and conditions</a>
            <a href="#" className="hover:text-orange-500">Privacy policy</a>
            <a href="#" className="hover:text-orange-500">Return policy</a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© 2023 GetPasto. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-facebook text-lg"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-instagram text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

