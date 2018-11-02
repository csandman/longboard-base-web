import { SET_SEARCH_TERM, GET_SEARCH_TERM } from "../actions/types";

const initialState = {
  searchTerm: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      console.log('set search reducer',action.payload);
      return {
        ...state,
        searchTerm: action.payload
      };
    case GET_SEARCH_TERM:
      console.log(action.payload);
      return {
        ...state
      };
    default:
      return state;
  }
}
