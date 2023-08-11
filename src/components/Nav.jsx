import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaCog, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Content', href: '#content' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full mt-6 mx-auto">
      <div className="w-full mx-auto px-12">
        <div className="flex items-center justify-between h-16">
          <div className="">
            <a href="#" className="text-white font-bold">
              <i className="font-semibold font-poppins">ROCKin</i>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white ml-4"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-gray-400 hover:text-white focus:text-white focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && 
        <div className="w-full px-12 pt-2 pb-3 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-300 hover:text-white block mt-4"
            >
              {link.text}
            </a>
          ))}
        </div>
      }
    </nav>
  );
};

export default Navbar;
