import axios from "axios";
import {
  GET_DECKS,
  ADD_DECK,
  DELETE_DECK,
  DECKS_LOADING,
  GET_DECK,
  SEARCH_DECKS
} from "./types";

export const searchDecks = searchTerm => dispatch => {
  dispatch(setDecksLoading());
  axios.get(`/api/decks/search/${searchTerm}`).then(res =>
    dispatch({
      type: SEARCH_DECKS,
      payload: res.data
    })
  );
};

export const getDecks = queryStr => dispatch => {
  dispatch(setDecksLoading());
  axios.get("/api/decks").then(res =>
    dispatch({
      type: GET_DECKS,
      payload: res.data
    })
  );
};

export const getDeck = fileName => dispatch => {
  dispatch(setDecksLoading());
  axios.get(`/api/decks/${fileName}`).then(res =>
    dispatch({
      type: GET_DECK,
      payload: res.data
    })
  );
};

export const addDeck = deck => dispatch => {
  axios.post("/api/decks", deck).then(res =>
    dispatch({
      type: ADD_DECK,
      payload: res.data
    })
  );
};

export const deleteDeck = id => dispatch => {
  axios.delete(`/api/decks/${id}`).then(res =>
    dispatch({
      type: DELETE_DECK,
      payload: id
    })
  );
};

export const setDecksLoading = () => {
  return {
    type: DECKS_LOADING
  };
};
