import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DefaultNotFound from './DefaultNotFound';
import Header from './Header';
import Footer from './Footer';
import CoinList from './CoinList';
import { getCoinData } from '../actions';
import CoinDetails from './CoinDetails';
import AboutUs from './AboutUs';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinData());
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <CoinList />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/coin/:id">
          <CoinDetails />
        </Route>
        <Route path="*">
          <DefaultNotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
