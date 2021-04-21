import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Coin = ({
  id, symbol, name, price, change,
}) => {
  const theme = useSelector((state) => state.toggle);

  return (
    <div
      id={id}
      className={`${theme} border shadow mx-auto sm:w-full text-center w-7/8 flex flex-col sm:flex-row justify-between`}
    >
      <div className="p-2 sm:w-1/5">
        <p>{symbol}</p>
      </div>
      <div className="p-2 sm:w-1/5">
        <p>{name}</p>
      </div>
      <div className="p-2 sm:w-1/5">
        <p className="hidden sm:block">{price}</p>
        <p className="sm:hidden">{`usd ${price}`}</p>
      </div>
      <div className="p-2 sm:w-1/5">
        <p>{`${change} %`}</p>
      </div>
      <div className="p-2 sm:w-1/5">
        <Link to={`/coin/${id}`}>
          + Info
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
