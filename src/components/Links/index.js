import React from 'react';

/* react router */
import { Link } from 'react-router-dom';

/* store */

import { store } from '../../index';

/* style*/
import './index.scss';

const Links = ({ filter }) => {
  return (
    <div className="links">
      {filter === 'Shop' && (
        <>
          <Link to="/headphones" className="link ">
            Headphones
          </Link>
          <Link to="/earbuds" className="link ">
            Earbuds
          </Link>
          <Link to="/batteries" className="link ">
            Battery
          </Link>
        </>
      )}
      {filter === 'Headphones' && (
        <>
          <Link to="/" className="link ">
            Shop
          </Link>
          <Link to="/earbuds" className="link ">
            Earbuds
          </Link>
          <Link to="/batteries" className="link ">
            Battery
          </Link>
        </>
      )}
      {filter === 'Earbuds' && (
        <>
          <Link to="/" className="link ">
            Shop
          </Link>
          <Link to="/earbuds/wireless" className="link ">
            Wireless
          </Link>
          <Link to="/earbuds/wired" className="link ">
            Wired
          </Link>
        </>
      )}
      {filter === 'Battery' && (
        <>
          <Link to="/" className="link ">
            Shop
          </Link>
          <Link to="/headphones" className="link ">
            Headphones
          </Link>
          <Link to="/earbuds" className="link ">
            Earbuds
          </Link>
        </>
      )}

      <div className="price-filter">
        <h3>Filter :</h3>
        <select onChange={(e) => store.dispatch({ type: e.target.value })}>
          <option value="latest">Latest</option>
          <option value="highest">Highest Price</option>
          <option value="lowest">Lowest Price</option>
        </select>
      </div>
    </div>
  );
};

export default Links;
