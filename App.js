import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/Products';
import ShopNavigator from './navigation/ShopNavigator';
import cartReducer from './store/reducers/Cart';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

const App = props => {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  )
}


export default App;