import { createStore, combineReducers } from 'redux';
import calculatorReducer from './Calculator/Calculator.reducer';
import produscts from './Products/Products.reducer';

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: produscts
})

const store = createStore(rootReducer)

export default store;