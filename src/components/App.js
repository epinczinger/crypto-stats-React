import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinData } from '../actions';

const App = () => {
  const dispatch = useDispatch();
  const coin = useSelector((state) => state.coin);

  const askData = () => {
    dispatch(getCoinData());
  };

  return (
    <div className="">
      <h1>CryptoStats</h1>
      <p>
        {coin}
        {askData}
      </p>
      <button name="button" onClick={askData} type="button">Button </button>

    </div>
  );
};

export default App;
