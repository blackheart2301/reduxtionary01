import {
    FETCH_WORD_DETAILS_REQUEST,
    FETCH_WORD_DETAILS_SUCCESS,
    FETCH_WORD_DETAILS_FAILURE,
    ADD_HISTORY_ITEM,
  } from '../actions/actionTypes'; // Update the path as needed
  
  // Initial state
  const initialState = {
    wordDetails: null,
    loading: false,
    error: null,
    history: [],
  };
  
  // Reducer function
  const wordReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WORD_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_WORD_DETAILS_SUCCESS:
        return {
          ...state,
          wordDetails: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_WORD_DETAILS_FAILURE:
        return {
          ...state,
          wordDetails: null,
          loading: false,
          error: action.payload,
        };
      case ADD_HISTORY_ITEM:
        return {
          ...state,
          history: [...state.history, action.payload],
        };
      
      default:
        return state;
    }
  };
  
  export default wordReducer;
  