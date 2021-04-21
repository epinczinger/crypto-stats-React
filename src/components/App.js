import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import CoinList from './CoinList';
import { getCoinData } from '../actions';

const App = () => {
  // const coins = useSelector((state) => state.coin);
  const theme = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  const askData = () => {
    dispatch(getCoinData());
  };

  useEffect(() => {
    dispatch(getCoinData());
  }, []);

  return (
    <div>
      <Header />
      <CoinList />

      <button
        className={theme}
        name="button"
        onClick={() => { askData(); }}
        type="button"
      >
        Button
      </button>
      <Footer />
    </div>
  );
};

export default App;
