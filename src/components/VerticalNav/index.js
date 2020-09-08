import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Filter from '../Filter';
import './index.scss';

const VerticalNav = ({ children }) => {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <div className="verticalNav">
      <div className="userProfile">
        <ul>
          <li>
            <div className="user-img">
              <img src={currentUser.photoURL} alt="user" />
            </div>
          </li>
          <li>
            <span className="displayName">{currentUser.displayName}</span>
          </li>
        </ul>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span className="signOut">Sign Out</span>
          </li>
        </ul>
        <Filter show={true} />
      </div>
    </div>
  );
};

export default VerticalNav;
