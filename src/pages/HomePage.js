import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Rock Paper Scissors Game
        </h1>
        <p className="text-lg mb-6">
          <Link 
            to="/register" 
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mr-2"
          >
            Register
          </Link>
          or
          <Link 
            to="/login" 
            className="inline-block bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ml-2"
          >
            Login
          </Link>
          to start playing.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
