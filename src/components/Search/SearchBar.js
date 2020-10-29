import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ handleSearch }) {
  return (
    <div>
      <input type="text" placeholder="description" onChange={handleSearch} />
      <input type="text" placeholder="location" onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
