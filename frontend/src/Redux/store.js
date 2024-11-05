
import {createStore,combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import { getProductsReducer,getProductDetailsReducer} from './Reducers/ProductReducer';
import { cartReducer } from './Reducers/cartReducer';
import { favouritesReducer } from './Reducers/favouritesReducer';
import { orderReducer } from './Reducers/orderReducer';
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer,
    favourites: favouritesReducer,
    orders: orderReducer
})

const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;