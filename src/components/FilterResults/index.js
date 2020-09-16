import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOutsideClickRef from '@rooks/use-outside-click-ref';

const FilterResults = ({ searchResults }) => {
  const [showSearchResults, setShowSearchResults] = useState(true);

  const handleClick = () => {
    setShowSearchResults(false);
  };
  const [ref] = useOutsideClickRef(handleClick);

  return (
    <>
      {searchResults.length > 0 && showSearchResults && (
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
