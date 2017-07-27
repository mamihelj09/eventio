import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/constants';
import createActionBuffer from 'redux-action-buffer';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


import eventsReducer from './Reducers/events_reducer';
import userReducer from './Reducers/user_reducer';

const reducers = combineReducers({
  user: userReducer,
  events: eventsReducer,
});

const store = createStore(reducers, compose(
  applyMiddleware(thunk, createLogger(), createActionBuffer(REHYDRATE)),
  autoRehydrate(),
));

persistStore(store);

export default store;

