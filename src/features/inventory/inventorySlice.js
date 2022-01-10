import { inventoryData } from '../../data.js';

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