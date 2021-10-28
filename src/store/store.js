import { createStore, combineReducers } from 'redux';

import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import calculatorReducer from './Calculator/Calculator.reducer';
import produscts from './Products/Products.reducer';

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: produscts
})

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer);

export const store = createStore(persistedReducer);
export const persistdStore = persistStore(store)

