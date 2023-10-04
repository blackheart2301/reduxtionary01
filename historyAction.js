import { FETCH_WORD_DETAILS_FAILURE, FETCH_WORD_DETAILS_REQUEST, FETCH_WORD_DETAILS_SUCCESS, ADD_HISTORY_ITEM } from "./actionTypes";
import axios from "axios";
  // Action Creators
export const fetchWordDetailsRequest = () => ({
    type: FETCH_WORD_DETAILS_REQUEST,
  });
  
  export const fetchWordDetailsSuccess = (wordDetails) => ({
    type: FETCH_WORD_DETAILS_SUCCESS,
    payload: wordDetails,
  });
  
  export const fetchWordDetailsFailure = (error) => ({
    type: FETCH_WORD_DETAILS_FAILURE,
    payload: error,
  });
  
  export const addToHistory = (word) => ({
    type: ADD_HISTORY_ITEM,
    payload: word,
  });
  
  // Async Action Creator for fetching word details
  export const fetchWordDetails = (word) => {
    return async (dispatch) => {
      dispatch(fetchWordDetailsRequest());
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const wordDetails = response.data[0]; // Assuming you are handling the first result
        dispatch(fetchWordDetailsSuccess(wordDetails));
        dispatch(addToHistory(word));
      } catch (error) {
        dispatch(fetchWordDetailsFailure(error.message));
      }
    };
  };
  