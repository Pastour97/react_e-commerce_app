import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


 import rootReducer from './root-reducer';

 const middlewares = [thunk];

 if(process.env.NODE_ENV === 'development') {
   middlewares.push(logger);
 }

 //export const store = createStore(rootReducer, applyMiddleware(...middlewares));
 /////////////////////////////////////////////////////////////
//use the createStore above if the project is over 
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

export const persistor = persistStore(store);


