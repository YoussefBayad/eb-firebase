import React, { useState } from 'react';
import useOutsideClickRef from '@rooks/use-outside-click-ref';

import search from '../../assets/icon/search.svg';
import { motion, AnimatePresence } from 'framer-motion';

const FilterInput = ({ handleChange }) => {
  const [showFilter, setShowFilter] = useState(false);

  const handleClick = () => {
    setShowFilter((prev) => !prev);
  };
  const [ref] = useOutsideClickRef(handleClick);

  return (
    <>
      <AnimatePresence>
        {showFilter && (
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            ref={ref}
            className="filter-input"
            type="text"
            placeholder="Search ..."
            onChange={handleChange}
            autoFocus
          />
        )}
      </AnimatePresence>

      <img
        className="search-icon"
        src={search}
        alt="search icon"
        onClick={handleClick}
      />
    </>
  );
};

export default FilterInput;
