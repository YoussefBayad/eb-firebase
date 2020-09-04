import React, { useState } from 'react';

// react router Link
import { Link } from 'react-router-dom';

// outside click
import useOutsideClickRef from '@rooks/use-outside-click-ref';

const FilterResults = ({ searchResults }) => {
  const [showSearchResults, setShowSearchResults] = useState(true);

  // hide search results div

  const handleClick = () => {
    setShowSearchResults(false);
  };
  const [ref] = useOutsideClickRef(handleClick);

  return (
    <>
      {showSearchResults && (
        <div ref={ref} className="search-results">
          {searchResults.map((product) => (
            <Link key={product.id} to={`/shop/product/${product.id}`}>
              <div className="search-product">
                <img
                  className="search-img"
                  src={`/img/${product.name.trim()}.webp`}
                  alt="product img"
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
    </>
  );
};

export default FilterResults;
