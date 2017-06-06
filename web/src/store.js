import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { promiseMiddleware } from './middleware';
import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';


const reducer = combineReducers({
  auth,
  common,
  home
});

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;
