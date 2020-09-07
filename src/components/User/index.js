import React, { useState } from 'react';

//link
import { Link } from 'react-router-dom';

//redux

import { useSelector } from 'react-redux';

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
  const currentUser = useSelector((state) => state.currentUser);
  const [ref] = useOutsideClickRef(() => setOpen(false));

  return (
    <div
      className="user"
      title={currentUser ? currentUser.displayName : 'Login'}
    >
      <img
        src={
          currentUser
            ? currentUser.photoURL
              ? currentUser.photoURL
              : person
            : person
        }
        alt="user"
        className="user-image"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div ref={ref} className="logout">
          {currentUser ? (
            <>
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
            </>
          ) : (
            <>
              <Link
                to="/registration"
                className="btn"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Register
              </Link>
              <Link
                to="/login"
                className="btn"
                onClick={() => {
                  setOpen(false);
                }}
              >
                login
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
