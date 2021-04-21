import React from 'react';
import { useSelector } from 'react-redux';
import Coin from './Coin';

const CoinList = () => {
  const theme = useSelector((state) => state.toggle);
  const coins = useSelector((state) => state.coin);

  const seedList = coins.map((c) => (
    <div key={c.id}>
      <Coin
        id={c.id}
        symbol={c.symbol}
        name={c.name}
        price={c.priceUsd}
        url={c.explorer}
      />
    </div>
  ));

  return (
    <div className={`${theme} container mx-auto px-4 sm:px-8 max-w-3xl`}>
      <div className="w-full border text-center hidden sm:flex justify-around pb-2">
        <div
          className="sm:w-1/5 p-2
sm:w-1/5 p-2"
        >
          Symbol
        </div>
        <div
          className="sm:w-1/5 p-2
sm:w-1/5 p-2"
        >
          Name
        </div>
        <div className="sm:w-1/3 p-2">Price</div>
        <div className="p-2 sm:pr-8">Info</div>
      </div>
      {seedList}
    </div>
  );
};

export default CoinList;
