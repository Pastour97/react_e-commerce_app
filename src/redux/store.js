import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';
import rootReducer from './root-reducer';

//createSagaMiddleware can take some configurations which we didn't need in this project
const sagaMiddleware = createSagaMiddleware();

//redux thunk got replaced with redux saga to handle asynchronous actions
//const middlewares = [thunk];
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
 }

//export const store = createStore(rootReducer, applyMiddleware(...middlewares));
/////////////////////////////////////////////////////////////
//use the createStore above if the project is over , it's for redux tools in chrome
const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : compose;

const enhancer = composeEnhancers(
 applyMiddleware(...middlewares),
 // other store enhancers if any
);
export const store = createStore(rootReducer, enhancer);
//////////////////////////////////////////////////////////////

sagaMiddleware.run( rootSaga );

export const persistor = persistStore(store);


