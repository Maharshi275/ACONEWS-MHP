import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white to-black h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to ACONEWS</h1>
        <p className="text-lg mb-8">Your daily source of the latest news from around the world.</p>
        <a href="/news" className="px-6 py-3 bg-white font-bold text-black rounded-md shadow-lg hover:bg-blue-600 transition-colors">
          Explore News
        </a>
      </div>
    </div>
  );
};

export default Home;
