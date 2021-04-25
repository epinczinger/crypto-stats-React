import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import coinReducer from './coins';
import filterReducer from './filter';
import toggleReducer from './toggle';

const rootReducer = combineReducers({
  coin: coinReducer,
  toggle: toggleReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
