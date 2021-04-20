import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../actions';
import Header from './Header';
import CoinList from './CoinList';

const App = () => {
  const dispatch = useDispatch();
  const coin = useSelector((state) => state.coin);
  const theme = useSelector((state) => state.toggle);

  // const askData = () => {
  //   dispatch(getCoinData());
  // };

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
        onClick={() => dispatch(toggleTheme(theme))}
        type="button"
      >
        Button
      </button>
    </div>
  );
};

export default App;
