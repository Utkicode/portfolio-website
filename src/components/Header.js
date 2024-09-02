import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Utkarsh Gupta</h1>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
        <ul className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 absolute sm:relative sm:flex ${isOpen ? 'top-16' : 'hidden'} sm:block left-0 right-0 bg-gray-900 sm:bg-transparent z-20 p-4 sm:p-0`}>
          <li><a href="#home" className="block text-center hover:underline">Home</a></li>
          <li><a href="#about" className="block text-center hover:underline">About Me</a></li>
          <li><a href="#skills" className="block text-center hover:underline">Skills</a></li>
          <li><a href="#education" className="block text-center hover:underline">Education</a></li>
          <li><a href="#work" className="block text-center hover:underline">My Work</a></li>
          <li><a href="#contact" className="block text-center hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
