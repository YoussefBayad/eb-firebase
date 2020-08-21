import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import search from '../../assets/icon/search.svg';
import './index.scss';
import { store } from '../../index.js';
import useOutsideClickRef from '@rooks/use-outside-click-ref';

const Filter = () => {
  //state

  const { products } = store.getState();
  const [showFilter, setShowFilter] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // handle input change

  const handleChange = (e) => {
    setShowSearchResults(true);

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

  // hide search results div

  const handleClick = () => {
    setShowSearchResults(false);
  };
  const [ref] = useOutsideClickRef(handleClick);

  return (
    <div className="filter">
      {showFilter && (
        <input
          className="filter-input"
          type="text"
          placeholder="Search ..."
          onChange={handleChange}
        />
      )}
      <img
        src={search}
        alt="search icon"
        onClick={() => setShowFilter((prev) => !prev)}
      />
      {searchResults.length > 0 && showSearchResults && (
        <div ref={ref} className="search-results">
          {searchResults.map((product) => (
            <Link key={product.id} to={`/shop/${product.id}`}>
              <div className="search-product">
                <img
                  className="search-img"
                  src={`/img/${product.name.trim()}.webp`}
                  alt=""
                />
                <div className="text">
                  <p className="search-product-name">{product.name}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
