import React from 'react';
import { useSelector } from 'react-redux';

const Coin = () => {
  const theme = useSelector((state) => state.toggle);

  return (
    <div className={`${theme} flex text-center justify-center px-2`}>
      <h2>Bitcoin</h2>
      <p>BTC</p>
      <p>58594.35</p>
      <p>
        Bitcoin is the first digital currency that allows users to send and
        receive money, without the interference of a central bank or government.
        Instead, a network of thousands of peers is controlling the transactions;
        a decentralized system.
      </p>
    </div>
  );
};

export default Coin;
