import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import coinReducer from './coins';
import toggleReducer from './toggle';

const rootReducer = combineReducers({
  coin: coinReducer,
  toggle: toggleReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
