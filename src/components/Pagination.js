import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-1 ${
          currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'
        } rounded-md`}
      >
        Previous
      </button>
      <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 mx-1 ${
          currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'
        } rounded-md`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
