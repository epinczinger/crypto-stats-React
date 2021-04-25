import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DefaultNotFound from './components/DefaultNotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './containers/Main';
import { getCoinData } from './actions';
import CoinDetails from './containers/CoinDetails';
import AboutUs from './components/AboutUs';

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
          <Main />
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
