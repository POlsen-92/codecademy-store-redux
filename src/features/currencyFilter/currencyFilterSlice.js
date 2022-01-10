import { getCurrencySymbol } from "../../utilities/utilities";

// REDUCER FUNCTION
const initialCurrencyFilter = 'USD';
export const currencyFilterReducer = (
  currencyFilter = initialCurrencyFilter,
  action
) => {
  switch (action.type) {
    case 'currencyFilter/setCurrency': {
      return action.payload;
    }
    default: {
      return currencyFilter;
    }
  }
};

// ACTION FUNCTIONS
export const setCurrency = (currency) => {
  return {
    type: 'currencyFilter/setCurrency',
    payload: currency,
  };
};

// SELECTOR FUNCTIONS
export const selectCurrencyFilter = (state) => state.currencyFilter

export const selectCurrencySymbol = (state) => {
  const currencyFilter = selectCurrencyFilter(state)

  return getCurrencySymbol(currencyFilter)
}