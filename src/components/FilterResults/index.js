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
        <div ref={ref} className="search-results" onClick={handleClick}>
          {searchResults.map((product) => (
            <Link
              key={product.documentID}
              to={`/shop/product/${product.documentID}`}
            >
              <div className="search-product">
                <img
                  className="search-img"
                  src={
                    product.photoURL
                      ? product.photoURL
                      : ` /img/${product.name.replace(/\s/g, '')}.webp`
                  }
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
