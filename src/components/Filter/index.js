import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FilterInput from '../FilterInput/index.js';
import FilterResults from '../FilterResults/index.js';
import search from '../../assets/icon/search.svg';
import './index.scss';

const Filter = () => {
  const products = useSelector((state) => state.products.data);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

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
  const handleClick = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="filter">
      <div className="flex">
        <FilterInput
          handleChange={handleChange}
          handleClick={handleClick}
          showFilter={showFilter}
        />
        <img
          className="search-icon"
          src={search}
          alt="search icon"
          onClick={handleClick}
        />
      </div>
      <FilterResults
        searchResults={searchResults}
        showSearchResults={showSearchResults}
        setShowSearchResults={setShowSearchResults}
      />
    </div>
  );
};

export default Filter;
