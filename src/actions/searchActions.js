import { SET_SEARCH_TERM, GET_SEARCH_TERM } from '../actions/types';

export const getSearchTerm = () => {
  return {
    type: GET_SEARCH_TERM
  }
};

export const setSearchTerm = searchTerm => {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  }
};