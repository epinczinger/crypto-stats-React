import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Coin = ({
  id, symbol, name, price, url,
}) => {
  const theme = useSelector((state) => state.toggle);

  return (
    <div
      id={id}
      className={`${theme} border shadow mx-auto sm:w-full w-7/8 text-center flex flex-col sm:flex-row justify-between`}
    >
      <div className="sm:w-1/5 p-2">
        <p>{symbol}</p>
      </div>
      <div className="sm:w-1/5 p-2">
        <p>{name}</p>
      </div>
      <div className="sm:w-1/3 p-2">
        <p className="hidden sm:block">{price}</p>
        <p className="sm:hidden">{`usd ${price}`}</p>
      </div>
      <div className="p-2 sm:pr-8">
        <a target="_blank" rel="noreferrer" href={url}>
          + Info
        </a>
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
  url: '',
};

Coin.propTypes = {
  id: PropTypes.string,
  symbol: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  url: PropTypes.string,
};
