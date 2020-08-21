import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import search from '../../assets/icon/search.svg';
import './index.scss';
import { store } from '../../index.js';
const Filter = () => {
  const { products } = store.getState();
  const [showFilter, setShowFilter] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleClick = (e) => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value)
    );

    setSearchResults(results);
  };
  return (
    <div className="filter">
      {showFilter && (
        <input
          className="filter-input"
          type="text"
          placeholder="Search ..."
          onChange={handleClick}
        />
      )}
      <img
        src={search}
        alt="search icon"
        onClick={() => setShowFilter((prev) => !prev)}
      />
      {searchResults.length > 0 && (
        <div className="search-results">
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
