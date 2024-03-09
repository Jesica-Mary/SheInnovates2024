import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search Google"
        className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
