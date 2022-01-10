import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
// Import the Cart component here.
import { Cart } from '../features/cart/Cart.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { getFilteredItems } from '../utilities/utilities.js';

// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  const showFilteredItems = getFilteredItems(state.inventory, state.searchTerm)

  return (
    <div>
      <SearchTerm 
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Inventory
        inventory={showFilteredItems}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Cart 
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};
