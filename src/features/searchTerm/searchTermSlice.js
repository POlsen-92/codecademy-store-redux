// SETTING STATE
const initialSearchTerm = '';

// REDUCER FUNCTION
export const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
    switch(action.type) {
        case 'searchTerm/setSearchTerm': {
            return action.payload
        }
        case 'searchTerm/clearSearchTerm': {
            return ''
        }
        default: {
            return searchTerm;
        }
    }
}


// ACTION FUNCTIONS
export const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}
export const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm'
    }
}

// SELECTOR FUNCTIONS
export const selectSearchTerm = (state) => state.searchTerm