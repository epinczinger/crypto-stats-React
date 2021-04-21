import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import CoinList from './CoinList';
import { getCoinData } from '../actions';

const App = () => {
  // const coins = useSelector((state) => state.coin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinData());
  }, []);

  return (
    <div>
      <Header />
      <CoinList />
      <Footer />
    </div>
  );
};

export default App;
