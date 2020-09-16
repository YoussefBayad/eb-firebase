import React, { useState } from 'react';
import useOutsideClickRef from '@rooks/use-outside-click-ref';

import search from '../../assets/icon/search.svg';

const FilterInput = ({ handleChange, show }) => {
  const [showFilter, setShowFilter] = useState(show);

  const handleClick = () => {
    setShowFilter((prev) => !prev);
  };
  const [ref] = useOutsideClickRef(handleClick);

  return (
    <>
      {showFilter && (
        <input
          ref={ref}
          className="filter-input"
          type="text"
          placeholder="Search ..."
          onChange={handleChange}
          autoFocus
        />
      )}

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
