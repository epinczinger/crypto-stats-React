import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Coin = ({
  id, symbol, name, price, change,
}) => {
  const theme = useSelector((state) => state.toggle);
  const bgColor = id % 2 !== 0 ? 'bg-gray-200' : 'bg-gray-300';

  const greenRed = Number(change) > 0 ? 'text-green-700' : 'text-red-700';

  return (
    <div
      id={id}
      className={`${theme} ${bgColor} border rounded hover:border-yellow-500 shadow mx-auto sm:w-full text-center w-7/8 flex flex-col sm:flex-row justify-between`}
    >
      <div className="p-2 sm:w-1/5">
        <Link to={`/coin/${id}`}>{symbol}</Link>
      </div>
      <div className="p-2 sm:w-1/5 font-semibold text-xl">
        <p>{name}</p>
      </div>
      <div className="p-2 sm:w-1/5">
        <p className="hidden sm:block">{price}</p>
        <p className="sm:hidden text-xl">{`$ ${price}`}</p>
      </div>
      <div className={`${greenRed} p-2 sm:w-1/5`}>
        <p>{`${change} %`}</p>
      </div>
      <div className="p-2 sm:w-1/5 text-center">
        <Link to={`/coin/${id}`}>
          <p className="rounded-full mx-auto h-7 w-7 hover:text-yellow-800 hover:opacity-50 border border-yellow-500 flex items-center justify-center">
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
