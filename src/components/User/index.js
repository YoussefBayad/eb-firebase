import React, { useState } from 'react';

//link
import { Link } from 'react-router-dom';

//store

import { store } from '../../index';

// auth

import { auth } from '../../Firebase/utils.js';

// click outside

import useOutsideClickRef from '@rooks/use-outside-click-ref';
// img

import person from '../../assets/icon/person.svg';
// style
import './index.scss';

const User = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = store.getState();
  const [ref] = useOutsideClickRef(() => setOpen(false));

  return (
    <>
      {currentUser ? (
        <div className="user" title={currentUser.displayName}>
          <img
            src={currentUser.photoURL}
            alt="user"
            className="user-image"
            onClick={() => setOpen((prev) => !prev)}
          />
          {open && (
            <div ref={ref} className="logout">
              <h3>{currentUser.displayName}</h3>
              <button
                className="btn"
                onClick={() => {
                  auth.signOut();
                  setOpen(false);
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login">
          <div className="user" title="LogIn">
            <img src={person} alt="person icon" />
          </div>
        </Link>
      )}
    </>
  );
};

export default User;
