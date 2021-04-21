import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const CoinDetails = () => {
  const coins = useSelector((state) => state.coin);
  const { id } = useParams();
  const thisCoin = coins.filter((coin) => coin.id === id)[0];
  console.log(thisCoin);

  return (
    <div>
      <h1>{thisCoin.name}</h1>
      <p>{thisCoin.priceUsd}</p>
      <p>{thisCoin.symbol}</p>
      <p>{thisCoin.marketCapUsd}</p>
      <p>{thisCoin.volumeUsd24Hr}</p>
      <p>{thisCoin.explorer}</p>
      <p>{thisCoin.changePercent24Hr}</p>
    </div>
  );
};

export default CoinDetails;
