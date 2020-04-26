import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //this line tells redux-persist to use localStorage as default storage

import  userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',              //it tells at what point we want to store stuff
    storage,                 //it gives storage key to the storage we imported
    whitelist: ['cart']     //an array containing
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);