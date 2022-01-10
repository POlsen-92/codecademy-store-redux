import React from 'react';

// COMPONENTS
import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import { Cart } from '../features/cart/Cart.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';

export const App = () => {
  return (
    <div>
      <SearchTerm />
      <CurrencyFilter />
      <Inventory />
      <Cart />
    </div>
  );
};
