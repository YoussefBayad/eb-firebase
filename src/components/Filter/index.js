import React, { useState, useEffect } from 'react';
import search from '../../assets/icon/search.svg';
import './index.scss';
import { store } from '../../index.js';
const Filter = () => {
  const { products } = store.getState();
  const [showFilter, setShowFilter] = useState(false);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    console.log(results);

    setSearchResults(results);
  }, [query]);
  return (
    <div className="filter">
      {showFilter && (
        <input
          className="filter-input"
          type="text"
          placeholder="Search ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      )}
      <img
        src={search}
        alt="search icon"
        onClick={() => setShowFilter((prev) => !prev)}
      />
    </div>
  );
};

export default Filter;
