import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { fetchNews } from '../services/api';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadNews();
  }, [currentPage]);

  const loadNews = async (keyword = '') => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNews(keyword, currentPage);
      setArticles(data.articles);
      setTotalPages(Math.ceil(data.totalArticles / 10));
    } catch (err) {
      setError('Failed to load news.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (keyword) => {
    setCurrentPage(1);
    loadNews(keyword);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Latest News</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p className="text-center font-bold">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default NewsFeed;
