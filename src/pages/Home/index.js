import React from 'react';
import { Link } from 'react-router-dom';
import downArrow from '../../assets/icon/down-arrow.svg';
import './index.scss';
const HomePage = () => {
  return (
    <>
      <div className="showcase">
        <div className="text">
          <h1>CREATE YOUR OWN SPACE.</h1>
          <p>
            Whether you’re tuning out a roommate’s TV, or escaping the
            distractions of an open office, We help you create your own quiet
            space. filtering out unwanted noise so all you hear is your music.
          </p>
          <Link to="/shop" className="link">
            Shop Now{' '}
          </Link>
        </div>
        <a href="#flex">
          <img src={downArrow} alt="scroll down" className="scroll-down" />
        </a>
      </div>
      <div className="cards">
        <h1>NEW RELEASES</h1>
        <div className="flex" id="flex">
          <Link to="/shop/earbuds">
            <div className="eardubs-card">
              <div className="text">
                <h1>Earbusds</h1>
                <Link to="/shop/earbuds">View All</Link>
              </div>
            </div>
          </Link>
          <Link to="/shop/headphones">
            <div className="headphones-card">
              <div className="text">
                <h1>Headphones</h1>
                <Link to="/shop/headphones">View All</Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
