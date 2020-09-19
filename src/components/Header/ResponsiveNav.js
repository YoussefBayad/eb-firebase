import useOutsideClickRef from '@rooks/use-outside-click-ref';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../forms/Button';

const ResponsiveNav = ({ open, setOpen }) => {
  const currentUser = useSelector((state) => state.currentUser);
  const [ref] = useOutsideClickRef(() => setOpen(false));

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="overlay"
          />
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 0 }}
            transition={{ duration: 0.5 }}
            ref={ref}
            className="responsive-nav"
          >
            <h1 className="close-nav" onClick={() => setOpen(false)}>
              X
            </h1>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/shop" onClick={() => setOpen(false)}>
              Shop
            </Link>
            <Link to="/shop/headphones" onClick={() => setOpen(false)}>
              Headphones
            </Link>
            <Link to="/shop/earbuds" onClick={() => setOpen(false)}>
              Earbuds
            </Link>
            <Link to="/" onClick={() => setOpen(false)}>
              About Us
            </Link>
            {currentUser ? (
              <Button onClick={() => setOpen(false)}>Logout</Button>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
                <Link to="/register" onClick={() => setOpen(false)}>
                  Register
                </Link>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveNav;
