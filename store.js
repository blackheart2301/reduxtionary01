import { combineReducers } from 'redux';
import wordReducer from './reducers/historyReducer'; // Update the path as needed
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // You can use thunk middleware for asynchronous actions

const rootReducer = combineReducers({
  word: wordReducer,
});


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
