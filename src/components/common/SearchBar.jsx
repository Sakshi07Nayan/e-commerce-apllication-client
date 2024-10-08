import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../store/actions/productActions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchProducts(query));
  };

  return (
    <form className="input-group mx-auto mt-2" onSubmit={handleSearch} style={{ width: '50%' }}>
      <div className="form-outline" data-mdb-input-init style={{ flex: '1' }}>
        <input
          id="search-focus"
          type="search"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          aria-label="Search"
        />
      </div>
      <button type="submit" className="btn btn-primary h-25" data-mdb-ripple-init>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
