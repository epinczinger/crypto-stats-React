import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleFilter }) => (
  <div className="mx-auto pt-2 mb-2 text-center">
    <label htmlFor="filter" name="filter" className="text-xl">
      Filter Coins:
      <select
        name="filter"
        className="dark:bg-gray-700 ml-2 p-2 bg-gray-200 rounded"
        onChange={handleFilter}
      >
        <option value="All" className="text-xl text-gray-700">
          All
        </option>
        <option value="Bullish" className="text-xl text-green-600">
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
