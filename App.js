import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Providers from './Navigation/index';

import productsReducer from './store/reducers/Products';
import cartReducer from './store/reducers/Cart';
import ordersReducer from './store/reducers/Order';
import userReducers from './store/reducers/User';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  user: userReducers,
});

const store = createStore(rootReducer);

const App = props => {
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  )
}


export default App;