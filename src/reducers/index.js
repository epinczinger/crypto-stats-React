import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import coinReducer from './coins';

const rootReducer = combineReducers({
  coin: coinReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
