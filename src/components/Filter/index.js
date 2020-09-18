import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FilterInput from '../FilterInput/index.js';
import FilterResults from '../FilterResults/index.js';

import './index.scss';

const Filter = () => {
  const products = useSelector((state) => state.products.data);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(true);

  const handleChange = (e) => {
    setShowSearchResults(true);
    if (e.target.value.trim() === '') {
      setSearchResults([]);
    } else {
      const results = products.filter((product) =>
        product.name
          .replace(/\s/g, '')
          .toLowerCase()
          .includes(e.target.value.replace(/\s/g, '').toLowerCase())
      );
      setSearchResults(results);
    }
  };

  return (
    <div className="filter">
      <FilterInput handleChange={handleChange} />

      <FilterResults
        searchResults={searchResults}
        showSearchResults={showSearchResults}
        setShowSearchResults={setShowSearchResults}
      />
    </div>
  );
};

export default Filter;
