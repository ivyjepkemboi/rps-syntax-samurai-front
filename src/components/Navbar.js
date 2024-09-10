import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 right-0 w-full shadow-md z-50">
      <div className="container mx-auto">
        <div className="flex justify-end space-x-4">
          <Link 
            to="/" 
            className="bg-gray-600 text-white hover:bg-gray-700 rounded-md px-4 py-2 transition duration-300"
          >
            Home
          </Link>
          <Link 
            to="/login" 
            className="bg-gray-600 text-white hover:bg-gray-700 rounded-md px-4 py-2 transition duration-300"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="bg-gray-600 text-white hover:bg-gray-700 rounded-md px-4 py-2 transition duration-300"
          >
            Register
          </Link>
          <Link 
            to="/play" 
            className="bg-gray-600 text-white hover:bg-gray-700 rounded-md px-4 py-2 transition duration-300"
          >
            Play Game
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
