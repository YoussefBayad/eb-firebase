import React from 'react';

// react router
import { Link } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
// style
import './index.scss';

const Links = ({ filter }) => {
  const dispatch = useDispatch();
  return (
    <div className="links">
      {filter === 'Shop' && (
        <>
          <Link to="/shop/headphones" className="link ">
            Headphones
          </Link>
          <Link to="/shop/earbuds" className="link ">
            Earbuds
          </Link>
          <Link to="/shop/batteries" className="link ">
            Battery
          </Link>
        </>
      )}
      {filter === 'Headphones' && (
        <>
          <Link to="/shop" className="link ">
            Shop
          </Link>
          <Link to="/shop/earbuds" className="link ">
            Earbuds
          </Link>
          <Link to="/shop/batteries" className="link ">
            Battery
          </Link>
        </>
      )}
      {filter === 'Earbuds' && (
        <>
          <Link to="/shop" className="link ">
            Shop
          </Link>
          <Link to="/shop/earbuds/wireless" className="link ">
            Wireless
          </Link>
          <Link to="/shop/earbuds/wired" className="link ">
            Wired
          </Link>
        </>
      )}
      {filter === 'Battery' && (
        <>
          <Link to="/shop" className="link ">
            Shop
          </Link>
          <Link to="/shop/headphones" className="link ">
            Headphones
          </Link>
          <Link to="/shop/earbuds" className="link ">
            Earbuds
          </Link>
        </>
      )}

      <div className="price-filter">
        <h3>Sort :</h3>
        <select onChange={(e) => dispatch({ type: e.target.value })}>
          <option value="latest">Latest</option>
          <option value="highest">Highest Price</option>
          <option value="lowest">Lowest Price</option>
        </select>
      </div>
    </div>
  );
};

export default Links;
