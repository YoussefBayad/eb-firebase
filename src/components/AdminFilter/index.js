import React, { forwardRef } from 'react';
import FilterInput from '../FilterInput';
import search from '../../assets/icon/search.svg';
import './index.scss';

const AdminFilter = ({ products, setProducts, initialState }) => {
  const handleChange = (e) => {
    if (e.target.value.trim() === '') {
      setProducts(initialState);
    } else {
      const results = initialState.filter((product) =>
        product.name
          .replace(/\s/g, '')
          .toLowerCase()
          .includes(e.target.value.replace(/\s/g, '').toLowerCase())
      );
      setProducts(results);
    }
  };

  return (
    <div className="admin-filter">
      <FilterInput handleChange={handleChange} showFilter={true} />
      <img className="search-icon" src={search} alt="search icon" />
    </div>
  );
};

export default AdminFilter;
