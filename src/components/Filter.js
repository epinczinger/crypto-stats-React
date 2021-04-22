import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleFilter }) => (
  <div className="mx-auto mb-2 text-center">
    <label htmlFor="filter" name="filter" className="text-2xl">
      Filter Coins:
      <select
        name="filter"
        className="pl-2"
        onChange={handleFilter}
      >
        <option value="All" className="text-xl text-gray-700">
          All
        </option>
        <option value="Bullish" className="text-xl text-green-700">
          Bullish
        </option>
        <option value="Bearish" className="text-xl text-red-700">
          Bearish
        </option>
      </select>
    </label>
  </div>
);

export default Filter;

Filter.propTypes = {
  handleFilter: PropTypes.func,
};

Filter.defaultProps = {
  handleFilter: () => {},
};
