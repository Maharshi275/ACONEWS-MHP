import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">ACONEWS</Link>
        <div>
          <Link to="/" className="px-4 py-2 text-xl font-bold text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/news" className="px-4 py-2 text-xl font-bold text-gray-600 hover:text-blue-600">News</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
