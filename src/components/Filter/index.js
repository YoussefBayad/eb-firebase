import React, { useState } from 'react';

// outside click
import useOutsideClickRef from '@rooks/use-outside-click-ref';

//store
import { store } from '../../index.js';

// image
import search from '../../assets/icon/search.svg';

// style
import './index.scss';
import FilterResults from '../FilterResults/index.js';

const Filter = () => {
  //state

  const { products } = store.getState();
  const [showFilter, setShowFilter] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // handle input change

  const handleChange = (e) => {
    let results = [];
    if (e.target.value === '') {
      setSearchResults(results);
    } else {
      results = products.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );

      setSearchResults(results);
    }
  };

  // handle search svg click

  const handleClick = () => {
    setShowFilter((prev) => !prev);
  };

  // outside click search input

  const [ref] = useOutsideClickRef(handleClick);

  return (
    <div className="filter">
      {showFilter && (
        <input
          ref={ref}
          className="filter-input"
          type="text"
          placeholder="Search ..."
          onChange={handleChange}
        />
      )}
      <img
        className="search-icon"
        src={search}
        alt="search icon"
        onClick={handleClick}
      />

      {searchResults.length > 0 && (
        <FilterResults searchResults={searchResults} />
      )}
    </div>
  );
};

export default Filter;
