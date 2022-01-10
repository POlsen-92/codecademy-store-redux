import { inventoryData } from '../../data.js';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

// REDUCER FUNCTION
const initialInventory = [];
export const inventoryReducer = (inventory = initialInventory, action) => {
  switch (action.type) {
    case 'inventory/loadData': {
      return action.payload;
    }
    default: {
      return inventory;
    }
  }
};

// ACTION FUNCTION
export const loadData = () => {
  return {
    type: 'inventory/loadData',
    payload: inventoryData,
  };
};

// SELECTOR FUNCTIONS

export const selectInventory = (state) => state.inventory

export const selectFilteredInventory = (state) => {
  const inventory = selectInventory(state);
  const searchTerm = selectSearchTerm(state);

  return inventory.filter((item) => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

