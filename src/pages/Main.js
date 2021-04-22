import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCoin } from '../actions';
import Coin from '../components/Coin';
import Filter from '../components/Filter';

const Main = () => {
  const theme = useSelector((state) => state.toggle);
  const coins = useSelector((state) => state.coin);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  let coinsToMap = coins;
  const coinsBullish = coins.filter((c) => Number(c.changePercent24Hr) >= 0);
  const coinsBearish = coins.filter((c) => Number(c.changePercent24Hr) <= 0);

  if (filter === 'Bullish') {
    coinsToMap = coinsBullish;
  } else if (filter === 'Bearish') {
    coinsToMap = coinsBearish;
  }

  const coinsList = coinsToMap.map((c) => (
    <div key={c.id}>
      <Coin
        id={c.rank}
        symbol={c.symbol}
        name={c.name}
        price={Number(c.priceUsd).toFixed(2)}
        change={Number(c.changePercent24Hr).toFixed(2)}
        url={c.explorer}
      />
    </div>
  ));

  const handleFilter = ({ target }) => {
    dispatch(filterCoin(target.value));
  };

  return (
    <div
      className={`${theme} h60 bg-gray-300 container mx-auto mt-2 px-4 sm:px-8 max-w-3xl rounded`}
    >
      <Filter handleFilter={handleFilter} />
      <div className="w-full border font-bold text-center text-xl hidden sm:flex justify-around rounded py-2">
        <div className="sm:w-1/5 p-2">Symbol</div>
        <div className="sm:w-1/5 p-2">Name</div>
        <div className="sm:w-1/5 p-2">Price in usd</div>
        <div className="sm:w-1/5 p-2">24hr %</div>
        <div className="sm:w-1/5 p-2">Info</div>
      </div>
      {coinsList}
    </div>
  );
};

export default Main;
