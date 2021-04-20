import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import CoinList from './CoinList';
import { getCoinData } from '../actions';

const App = () => {
  const coin = useSelector((state) => state.coin);
  const theme = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  const askData = () => {
    dispatch(getCoinData());
  };

  return (
    <div className={theme}>
      <Header />
      <h1>CryptoStats</h1>
      <p>
        {coin}
        {/* {askData} */}
      </p>
      <CoinList />

      <button
        name="button"
        onClick={() => { askData(); }}
        type="button"
      >
        Button
      </button>
    </div>
  );
};

export default App;
