import React from 'react';

const NewsCard = ({ article }) => {
  const { title, description, url, image, source } = article;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <img 
        className="w-full h-56 object-cover rounded-t-xl" 
        src={image || 'default-image.jpg'} 
        alt={title} 
      />
      <div className="p-4">
        <h3 className="font-semibold text-xl text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="text-sm text-gray-500 mb-4">Source: {source.name}</div>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-blue-600 font-bold hover:text-blue-800"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
