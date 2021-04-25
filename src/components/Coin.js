import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Coin = ({
  id, symbol, name, price, change,
}) => {
  const greenRed = Number(change) > 0 ? 'text-green-700' : 'text-red-700';

  return (
    <div
      id={id}
      className={`border bg-gray-200 dark:bg-gray-800 ${id} hover:border-yellow-600 hover:bg-gray-300 dark:hover:bg-gray-700 shadow mx-auto sm:w-full text-center w-7/8 flex flex-col sm:flex-row justify-between`}
    >
      <div className="p-2 text-lg sm:w-1/5">
        <Link to={`/coin/${id}`}>{symbol}</Link>
      </div>
      <div className="p-2 sm:w-1/5 text-xl">
        <p>{name}</p>
      </div>
      <div className="p-2 sm:w-1/5">
        <p className="hidden sm:block">{`$ ${price}`}</p>
        <p className="sm:hidden text-xl">{`$ ${price}`}</p>
      </div>
      <div className={`${greenRed} p-2 font-semibold sm:w-1/5`}>
        <p>{`${change} %`}</p>
      </div>
      <div className="p-2 sm:w-1/5 text-center">
        <Link to={`/coin/${id}`}>
          <p className="rounded-full mx-auto h-7 w-7 hover:text-gray-800 text-semibold border border-gray-600 flex items-center justify-center">
            +
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Coin;

Coin.defaultProps = {
  id: '',
  symbol: '',
  name: '',
  price: '',
  change: '',
};

Coin.propTypes = {
  id: PropTypes.string,
  symbol: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  change: PropTypes.string,
};
