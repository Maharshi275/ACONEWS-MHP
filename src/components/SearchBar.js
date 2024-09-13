import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-center mb-6">
      <form onSubmit={handleSearch} className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 font-semibold border-2 border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full px-6 bg-black font-bold text-white rounded-r-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
